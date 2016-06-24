/**
 * Copyright (c) 2014, 2015, Oracle and/or its affiliates.
 * All rights reserved.
 */
"use strict";
/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
*/
define(["ojs/ojcore", "jquery", "ojs/ojcomponentcore", "ojs/ojcollapsible"], function($oj$$59$$, $$$$54$$) {
  (function() {
    $oj$$59$$.$__registerWidget$("oj.ojAccordion", $$$$54$$.oj.baseComponent, {widgetEventPrefix:"oj", options:{multiple:!1, expanded:null, beforeExpand:null, expand:null, beforeCollapse:null, collapse:null}, _ComponentCreate:function() {
      this._super();
      this.element.addClass("oj-accordion oj-component").attr("role", "group");
      this.options.expanded = this.$_expandedIndexToId$(this.options.expanded);
      this.$_refresh$();
    }, $_NotifyContextMenuGesture$:function($menu$$18$$, $event$$529$$, $eventType$$46$$) {
      this.$_OpenContextMenu$($event$$529$$, $eventType$$46$$, {launcher:this.element.find(".oj-collapsible-header-icon").first()});
    }, _destroy:function() {
      this.element.removeClass("oj-accordion oj-component").removeAttr("role");
      this.element.children().removeClass("oj-accordion-collapsible");
      this.element.children(".oj-accordion-created").removeClass("oj-accordion-created").ojCollapsible("destroy");
    }, _setOption:function($key$$159$$, $value$$283$$, $flags$$51$$) {
      if ("multiple" === $key$$159$$) {
        !1 == $value$$283$$ && !0 == this.options.multiple && this.element.children(".oj-expanded").first().siblings(".oj-collapsible").ojCollapsible("collapse", !1);
      } else {
        if ("expanded" === $key$$159$$) {
          this.$_setExpandedOption$($value$$283$$);
          return;
        }
      }
      this._super($key$$159$$, $value$$283$$, $flags$$51$$);
    }, refresh:function() {
      this._super();
      this.$_refresh$();
    }, $_refresh$:function() {
      this.$_makeCollapsible$();
      this._setOption("disabled", this.options.disabled);
      this.$_internalSetExpanded$ = !0;
      this._setOption("expanded", this.options.expanded);
      this.$_internalSetExpanded$ = !1;
      this.$_setupEvents$();
    }, $_makeCollapsible$:function() {
      this.element.children(":oj-collapsible").each(function() {
        $$$$54$$(this).ojCollapsible("option", "expandArea", "header");
      });
      this.$collapsibles$ = this.element.children().not(":oj-ojCollapsible").ojCollapsible({expandArea:"header"}).addClass("oj-accordion-created").end().addClass("oj-accordion-collapsible");
    }, $_setupEvents$:function() {
      var $events$$14$$ = {keydown:this.$_keydown$, ojbeforeexpand:this.$_beforeExpandHandler$, ojexpand:this.$_expandHandler$, ojbeforecollapse:this.$_beforeCollapseHandler$, ojcollapse:this.$_collapseHandler$};
      this._off(this.$collapsibles$);
      this._on(this.$collapsibles$, $events$$14$$);
    }, $_keydown$:function($event$$530$$) {
      if (!$event$$530$$.altKey && !$event$$530$$.ctrlKey && ($$$$54$$($event$$530$$.target).hasClass("oj-collapsible-header") || $$$$54$$($event$$530$$.target).hasClass("oj-collapsible-header-icon"))) {
        var $keyCode$$20$$ = $$$$54$$.ui.keyCode, $enabledCollapsibles$$ = this.$collapsibles$.not(".oj-disabled"), $length$$20$$ = $enabledCollapsibles$$.length, $target$$95$$ = $$$$54$$($event$$530$$.target).closest(".oj-collapsible"), $currentIndex$$4$$ = $enabledCollapsibles$$.index($target$$95$$), $toFocus$$ = !1;
        if (0 <= $currentIndex$$4$$) {
          switch($event$$530$$.keyCode) {
            case $keyCode$$20$$.RIGHT:
            ;
            case $keyCode$$20$$.DOWN:
              $toFocus$$ = $enabledCollapsibles$$[($currentIndex$$4$$ + 1) % $length$$20$$];
              break;
            case $keyCode$$20$$.LEFT:
            ;
            case $keyCode$$20$$.UP:
              $toFocus$$ = $enabledCollapsibles$$[($currentIndex$$4$$ - 1 + $length$$20$$) % $length$$20$$];
              break;
            case $keyCode$$20$$.HOME:
              $toFocus$$ = $enabledCollapsibles$$[0];
              break;
            case $keyCode$$20$$.END:
              $toFocus$$ = $enabledCollapsibles$$[$length$$20$$ - 1];
          }
        }
        $toFocus$$ && ($target$$95$$ && $$$$54$$($target$$95$$).trigger("ojfocusout"), $$$$54$$($toFocus$$).trigger("ojfocus"), $event$$530$$.preventDefault());
      }
    }, $_findTargetSiblings$:function($closestCollapsible_event$$531$$) {
      return!this.options.multiple && ($closestCollapsible_event$$531$$ = $$$$54$$($closestCollapsible_event$$531$$.target).closest(".oj-collapsible"), $closestCollapsible_event$$531$$.parent().is(":oj-ojAccordion")) ? $closestCollapsible_event$$531$$.siblings(".oj-collapsible.oj-expanded").map(function() {
        return $$$$54$$(this).data("oj-ojCollapsible");
      }) : $$$$54$$();
    }, $_beforeExpandHandler$:function($event$$532$$) {
      if (!this.$_isTargetMyCollapsible$($event$$532$$)) {
        return!0;
      }
      var $result$$63$$, $self$$172$$ = this, $newData$$1$$;
      this.$_findTargetSiblings$($event$$532$$).each(function() {
        var $beforeCollapsedData_collapsible$$ = this.element;
        $newData$$1$$ = $self$$172$$.$_initEventData$($beforeCollapsedData_collapsible$$, $$$$54$$($event$$532$$.target));
        $beforeCollapsedData_collapsible$$ = {header:$beforeCollapsedData_collapsible$$.find(".oj-collapsible-header"), content:$beforeCollapsedData_collapsible$$.find(".oj-collapsible-content")};
        return $result$$63$$ = this._trigger("beforeCollapse", $event$$532$$, $beforeCollapsedData_collapsible$$);
      });
      $newData$$1$$ || ($newData$$1$$ = $self$$172$$.$_initEventData$(null, $$$$54$$($event$$532$$.target)));
      this.options.multiple || this._trigger("beforeExpand", $event$$532$$, $newData$$1$$);
      return $result$$63$$;
    }, $_expandHandler$:function($event$$533$$, $eventData$$16$$) {
      if (this.$_isTargetMyCollapsible$($event$$533$$) && !this.$_duringSetExpandedOption$) {
        var $newData$$2$$, $self$$173$$ = this;
        this.$_findTargetSiblings$($event$$533$$).each(function() {
          this.collapse(!1, $event$$533$$, $eventData$$16$$);
          $newData$$2$$ = $self$$173$$.$_initEventData$(this.element, $$$$54$$($event$$533$$.target));
        });
        $newData$$2$$ || ($newData$$2$$ = $self$$173$$.$_initEventData$(null, $$$$54$$($event$$533$$.target)));
        this.options.multiple || this._trigger("expand", $event$$533$$, $newData$$2$$);
        this.$_updateExpanded$();
      }
    }, $_beforeCollapseHandler$:function($event$$534$$, $eventData$$17$$) {
      return this.$_isTargetMyCollapsible$($event$$534$$) && !this.options.multiple ? this._trigger("beforeCollapse", $event$$534$$, this.$_initCollapseEventData$($event$$534$$, $eventData$$17$$)) : !0;
    }, $_collapseHandler$:function($event$$535$$, $eventData$$18$$) {
      if (!this.$_duringSetExpandedOption$ && this.$_isTargetMyCollapsible$($event$$535$$)) {
        var $newData$$3$$ = this.$_initCollapseEventData$($event$$535$$, $eventData$$18$$);
        this.options.multiple || this._trigger("collapse", $event$$535$$, $newData$$3$$);
        this.$_updateExpanded$();
      }
    }, $_initEventData$:function($fromC$$, $toC$$) {
      return{fromCollapsible:$fromC$$, toCollapsible:$toC$$};
    }, $_initCollapseEventData$:function($event$$536$$, $eventData$$20$$) {
      var $newData$$4$$;
      if ($eventData$$20$$.toCollapsible) {
        $newData$$4$$ = $eventData$$20$$;
      } else {
        if ($event$$536$$.originalEvent && $event$$536$$.originalEvent.target) {
          var $collapsible$$1$$ = $$$$54$$($event$$536$$.originalEvent.target);
          $collapsible$$1$$.hasClass("oj-collapsible") && ($newData$$4$$ = this.$_initEventData$($$$$54$$($event$$536$$.target), $collapsible$$1$$));
        }
        $newData$$4$$ || ($newData$$4$$ = this.$_initEventData$($$$$54$$($event$$536$$.target), null));
      }
      return $newData$$4$$;
    }, $_isTargetMyCollapsible$:function($event$$537$$) {
      return $$$$54$$($event$$537$$.target).is(this.$collapsibles$);
    }, $_updateExpanded$:function() {
      var $cid$$8$$, $result$$64$$ = [];
      this.$collapsibles$.each(function($index$$250$$) {
        $$$$54$$(this).ojCollapsible("option", "expanded") && ($cid$$8$$ = $$$$54$$(this).attr("id"), $result$$64$$.push($cid$$8$$ ? $cid$$8$$ : $index$$250$$));
      });
      $oj$$59$$.$Object$.$_compareSet$(this.options.expanded, $result$$64$$) || this.option("expanded", $result$$64$$, {_context:{$internalSet$:!0, $writeback$:!0}});
    }, $_expandedIndexToId$:function($expanded$$11$$) {
      if (Array.isArray($expanded$$11$$)) {
        var $id$$53$$, $newExp$$ = [];
        this.element.children().each(function($index$$251$$) {
          ($id$$53$$ = $$$$54$$(this).attr("id")) ? -1 != $expanded$$11$$.indexOf($id$$53$$) ? $newExp$$.push($id$$53$$) : -1 != $expanded$$11$$.indexOf($index$$251$$) && $newExp$$.push($id$$53$$) : -1 != $expanded$$11$$.indexOf($index$$251$$) && $newExp$$.push($index$$251$$);
        });
        !this.options.multiple && 1 < $newExp$$.length && ($newExp$$ = [$newExp$$[$newExp$$.length - 1]]);
        return $newExp$$;
      }
      return null;
    }, $_setExpandedOption$:function($expanded$$12$$) {
      this.$_internalSetExpanded$ || ($expanded$$12$$ = this.$_expandedIndexToId$($expanded$$12$$));
      if ($expanded$$12$$) {
        var $self$$174$$ = this, $child$$11$$, $childId$$, $parentExp$$, $iexp$$ = 0;
        this.$collapsibles$.each(function($index$$252$$) {
          $child$$11$$ = $$$$54$$(this);
          $childId$$ = $child$$11$$.attr("id");
          $parentExp$$ = !1;
          $childId$$ ? $childId$$ == $expanded$$12$$[$iexp$$] && ($parentExp$$ = !0) : $index$$252$$ == $expanded$$12$$[$iexp$$] && ($parentExp$$ = !0);
          $parentExp$$ && $iexp$$++;
          $child$$11$$.ojCollapsible("option", "expanded") !== $parentExp$$ && ($oj$$59$$.$Logger$.warn("JET Accordion: override collapsible " + $index$$252$$ + " expanded setting"), $self$$174$$.$_duringSetExpandedOption$ = !0, $child$$11$$.ojCollapsible("option", "expanded", $parentExp$$), $self$$174$$.$_duringSetExpandedOption$ = !1);
        });
      }
      this.$_updateExpanded$();
    }, getNodeBySubId:function($collapsible$$2_index$$253_locator$$58$$) {
      if (null == $collapsible$$2_index$$253_locator$$58$$) {
        return this.element ? this.element[0] : null;
      }
      var $subId$$62$$ = $collapsible$$2_index$$253_locator$$58$$.subId;
      $collapsible$$2_index$$253_locator$$58$$ = $collapsible$$2_index$$253_locator$$58$$.index;
      if ("number" !== typeof $collapsible$$2_index$$253_locator$$58$$ || 0 > $collapsible$$2_index$$253_locator$$58$$ || $collapsible$$2_index$$253_locator$$58$$ >= this.$collapsibles$.length) {
        return null;
      }
      $collapsible$$2_index$$253_locator$$58$$ = this.$collapsibles$[$collapsible$$2_index$$253_locator$$58$$];
      switch($subId$$62$$) {
        case "oj-accordion-content":
          $subId$$62$$ = "oj-collapsible-content";
          break;
        case "oj-accordion-header":
          $subId$$62$$ = "oj-collapsible-header";
          break;
        case "oj-accordion-disclosure":
        ;
        case "oj-accordion-header-icon":
          $subId$$62$$ = "oj-collapsible-disclosure";
          break;
        case "oj-accordion-collapsible":
          return $collapsible$$2_index$$253_locator$$58$$;
        default:
          return null;
      }
      return $$$$54$$($collapsible$$2_index$$253_locator$$58$$).ojCollapsible("getNodeBySubId", {subId:$subId$$62$$});
    }, getSubIdByNode:function($collapsibleSubId_node$$107$$) {
      for (var $collapsibleIndex$$ = -1, $currentNode$$3_subId$$63$$ = $collapsibleSubId_node$$107$$;$currentNode$$3_subId$$63$$;) {
        $collapsibleIndex$$ = Array.prototype.indexOf.call(this.$collapsibles$, $currentNode$$3_subId$$63$$);
        if (-1 != $collapsibleIndex$$) {
          break;
        }
        $currentNode$$3_subId$$63$$ = $currentNode$$3_subId$$63$$.parentElement;
      }
      $currentNode$$3_subId$$63$$ = null;
      if (-1 != $collapsibleIndex$$) {
        switch($collapsibleSubId_node$$107$$ = ($collapsibleSubId_node$$107$$ = $$$$54$$(this.$collapsibles$[$collapsibleIndex$$]).ojCollapsible("getSubIdByNode", $collapsibleSubId_node$$107$$)) ? $collapsibleSubId_node$$107$$ : {}, $collapsibleSubId_node$$107$$.subId) {
          case "oj-collapsible-content":
            $currentNode$$3_subId$$63$$ = "oj-accordion-content";
            break;
          case "oj-collapsible-header":
            $currentNode$$3_subId$$63$$ = "oj-accordion-header";
            break;
          case "oj-collapsible-disclosure":
          ;
          case "oj-collapsible-header-icon":
            $currentNode$$3_subId$$63$$ = "oj-accordion-disclosure";
            break;
          default:
            $currentNode$$3_subId$$63$$ = "oj-accordion-collapsible";
        }
      }
      return $currentNode$$3_subId$$63$$ ? {subId:$currentNode$$3_subId$$63$$, index:$collapsibleIndex$$} : null;
    }});
  })();
});

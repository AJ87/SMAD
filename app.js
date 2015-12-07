"use strict"

function app() {
  var oldMenuItem, child;

  function factory() {
    var children = 1;
    return {
      add: function(){
        children = children + 1;
      },
      get: function(){
        return children;
      },
      remove: function(){
        children = children - 1;
      }};
  }

  child = factory();

  function showHide(id, vis) {
    var actions = {
      'contactMenu': function(vis) {
        document.getElementById('contact').style.display = vis;
      },
      'emergMenu': function(vis) {
        document.getElementById('emergency').style.display = vis;
      },
      'childMenu': function(vis) {
        document.getElementById('child').style.display = vis;
      },
      'consentMenu': function(vis) {
        document.getElementById('consent').style.display = vis;
      }
    }
    return actions[id](vis);
  }

  return {
    popup: function(url) {
      var popup=window.open(url,'Conditions','height=300,width=500,scrollbars=1,resizable=1,toolbar=1');
      if (window.focus) {popup.focus()}
    },
    addChild: function(button) {
      child.add();
      document.getElementById('child' + child.get()).style.display = 'block';
      document.getElementById('btnChild').style.display = 'block';
      document.getElementById('btnRemove').style.display = 'block';
      window.location.href = window.location.pathname + '#child' + child.get();
      if (child.get() === 4) {
        button.style.display = 'none';
      };
    },
    removeChild: function(button) {
      document.getElementById('child' + child.get()).style.display = 'none';
      child.remove();
      document.getElementById('btnChild').style.display = 'block';
      document.getElementById('btnRemove').style.display = 'block';
      window.location.href = window.location.pathname + '#child' + child.get();
      if (child.get() === 1) {
        button.style.display = 'none';
      };
    },
    menuSelect: function(elem) {
      oldMenuItem.className = 'not';
      elem.className = 'active';

      showHide(oldMenuItem.id, 'none');

      oldMenuItem = elem;

      showHide(elem.id, 'block');
    },
    setup: function() {
      oldMenuItem = document.getElementById('contactMenu');
      showHide(oldMenuItem.id, 'block');
    }
  };
}

var app = app();

window.onload = function(){
  app.setup();
};

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

  function setValues(obj) {
    document.getElementsByName(obj.setName)[0].value = document.getElementsByName(obj.getName)[0].value;
  }

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

  function validateCharacters(text) {
    var letters = /^[A-Za-z]+$/;
    return text.value.match(letters);
  }

  function validateTenDigits(number) {
    var numbers = /^\d{10}$/;
    return number.value.match(numbers);
  }

  function validateContactInfo() {
    var elem;
    elem = document.getElementByName('p1[firstName]');
    if (validateCharacters(elem.value)) {

    }

    elem = document.getElementByName('p1[lastName]');

    elem = document.getElementByName('p1[mobile]');

  }

  function validateEmergencyContacts() {

  }

  function validateChildInfo() {

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

      var childlast = child.get() - 1;
      setValues( {
        setName: 'c' + child.get() + '[lastName]',
        getName: 'c' + childlast + '[lastName]'
      });
      setValues( {
        setName: 'c' + child.get() + '[school]',
        getName: 'c' + childlast + '[school]'
      });
      setValues( {
        setName: 'c' + child.get() + '[medicare]',
        getName: 'c' + childlast + '[medicare]'
      });

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
      oldMenuItem.className = 'inactive';
      elem.className = 'active';
      showHide(oldMenuItem.id, 'none');
      oldMenuItem = elem;
      showHide(elem.id, 'block');

      setValues( {
        setName: 'e[lastName]',
        getName: 'p1[lastName]'
      });
      setValues( {
        setName: 'c1[lastName]',
        getName: 'p1[lastName]'
      });
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

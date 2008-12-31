/*
 * jQuery Unform plugin 0.1
 *
 * http://github.com/postpostmodern/jquery-unform
 *
 * Copyright (c) 2008 - 2009 Jason T Johnson
 *
 */

(function($){  
  $.fn.unform = function(options) {  
  
  var defaults = {
    exclude: '.date-pick'
  };  
  var options = $.extend(defaults, options);  
  
  return this.filter("form").each(function() {
    obj = $(this);

    var textfields = $(this).find('input[type=text]:not(' + options.exclude + ')');
    var textareas = $(this).find('textarea:not(' + options.exclude + ')');
    var selects = $(this).find('select:not(' + options.exclude + ')');

    textfields.each(
      function() {
        var the_proxy = $(this).attr('value');
        the_proxy = the_proxy == '' ? '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' : the_proxy;
        $(this).after('<span class="proxy textfield ' + $(this).attr('class') + '">' + the_proxy + '</span>');
        $(this).hide();
      }
    ).next().hover(
      function() {
        $(this).addClass('hover');
      },
      function() {
        $(this).removeClass('hover');
      }
    ).click(
      function() {
        $(this).prev().show().focus();
        $(this).hide();
        obj.find('.submit').show();
      }
    );

    textareas.each(
      function() {
        var the_proxy = $(this).html();
        the_proxy = the_proxy == '' ? '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' : the_proxy;
        $(this).after('<span class="proxy textarea ' + $(this).attr('class') + '"><p>' + the_proxy + '</p></span>');
        $(this).hide();
      }
    ).next().hover(
      function() {
        $(this).addClass('hover');
      },
      function() {
        $(this).removeClass('hover');
      }
    ).click(
      function() {
        $(this).prev().show();
        $(this).hide();
        obj.find('.submit').show();
      }
    );

    selects.each(
      function() {
        var the_value = $(this).attr('value');
        var the_proxy = $(this).find('option[value=' + the_value + ']').html();
        the_proxy = the_value == '' ? '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' : the_proxy;
        $(this).after('<span class="proxy select ' + $(this).attr('class') + '">' + the_proxy + '</span>');
        $(this).hide();
      }
    ).next().hover(
      function() {
        $(this).addClass('hover');
      },
      function() {
        $(this).removeClass('hover');
      }
    ).click(
      function() {
        $(this).prev().show().focus();
        $(this).hide();
        obj.find('.submit').show();
      }
    );
    obj.find('.submit').hide();
    obj.find('input[type=checkbox]').change(
      function() {
        obj.find('.submit').show();
      }
    );
  });  
 };  
})(jQuery); 
# Unform - On-Demand Form Widgets

Unform is a jQuery plugin to replace all controls with plain text until clicked. Like a non-AJAX version of in-place editing.

## Usage: 

    $('form.myform').unform();

## Exclude form elements like so:

    $('form.myform').unform({ exclude: '.date-pick' });
    
(`.date-pick` is actually excluded by default.)

## Good Luck

This is my first jQuery plugin, and it was a very quickly written for a project. It's sorta crude. Refactoring and refinement welcome.
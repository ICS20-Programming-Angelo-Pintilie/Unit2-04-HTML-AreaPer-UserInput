// Copyright (c) 2022 Angelo Pintilie All rights reserved
//
// Created by: Angelo Pintilie
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  const length = parseInt(document.getElementById('length-of-rectangle').value)
  const width = parseInt(document.getElementById('width-of-rectangle').value)

  // process
  const area = length * width
  const perimeter = 2 * (length + width)

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeter + ' cm'
}
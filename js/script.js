// Copyright (c) 2022 Angelo Pintilie All rights reserved
//
// Created by: Angelo Pintilie
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates the area and perimeter of the triangle.
 */
function calculate () {
  // input
  const base = parseFloat(document.getElementById('base-of-triangle').value)
  const height = parseFloat(document.getElementById('height-of-triangle').value)

  // process
  const area = (base * height) / 2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
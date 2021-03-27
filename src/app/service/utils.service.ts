import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  GetDescriptor(value: number) : string {
    var d = "Beyond"
    if (value == 0) {
      d = "Shift 0"
    } else if (value < 3) {
      d = "Poor"
    } else if (value < 5) {
      d = "Feeble"
    } else if (value < 8) {
      d = "Typical"
    } else if (value < 16) {
      d = "Good"
    } else if (value < 26) {
      d = "Excellent"
    } else if (value < 36) {
      d = "Remarkable"
    } else if (value < 46) {
      d = "Incredible"
    } else if (value < 63) {
      d = "Amazing"
    } else if (value < 88) {
      d = "Monstrous"
    } else if (value < 126) {
      d = "Unearthly"
    } else if (value < 176) {
      d = "Shift X"
    } else if (value < 351) {
      d = "Shift Y"
    } else if (value < 1000) {
      d = "Shift Z"
    } else if (value < 3000) {
      d = "Class 1000"
    } else if (value < 5000) {
      d = "Class 3000"
    } else if (value < 10000) {
      d = "Class 5000"
    }

    return d
  }
}

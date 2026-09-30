import { beforeEach, describe, expect, it, vi } from 'vitest';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import {CoursesCardList} from './courses-card-list'
import {CoursesDialog} from '../courses-dialog/courses-dialog'
import { By } from '@angular/platform-browser';

describe("test integration between courses-card-list and courses-dialog components", () => {
  let component: CoursesCardList;
  let fixture: ComponentFixture<CoursesCardList>;
  let de: DebugElement;

   beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [CoursesCardList, CoursesDialog]
      }).compileComponents();

      fixture = TestBed.createComponent(CoursesCardList)
      component = fixture.componentInstance
      de = fixture.debugElement

      it('should display the course list', () => )
})
})
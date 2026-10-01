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

      it('should display the course list', () => {
        const cardTitles = de.queryAll(By.css('.course-card .card-header'))
        expect(cardTitles.length).toBe(2);
        const titleEl = cardTitles[0].nativeElement
        expect(titleEl.textContent).toBe('Beginner Course')
      })

      it('should display message when no courses', () => {
        fixture.componentRef.setInput('courses', [])
        fixture.detectChanges()
        const msg = de.query(By.css('.no-courses'))
        expect(msg).toBeTruthy()
        expect(msg.nativeElement.textContent).toBe('No courses found. ')
      })

      it('should open dialog when edit button is clicked', () => {
          const btn = de.query(By.css('.course-card:first-child .edit-btn'))
          btn.nativeElement.click()
          fixture.detectChanges()

          const form = document.querySelectorAll('course-form')
          expect(form, "o form foi criado corretamente").toBeTruthy()
      })
})
})
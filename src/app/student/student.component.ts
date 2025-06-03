import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
declare var bootstrap: any;
@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit, AfterViewInit {
  students: any = [];
  filterStudent: any = [];
  modalRefAdd: any;
  studenttype: any;
  name: any;
  id: any;
  science: any;
  math: any;
  english: any;
  social: any;
  computer: any;
  requiredname: any = false;
  requiredid: any = false;
  requiredsubject: any = false;
  requiredstudenttype: any = false;
  idDisable = false;
  duplicateId = false;
  isAllSelected:boolean=false;
  validScienceError:boolean=false;
  validMathError: boolean=false;
  validSocialError: boolean=false;
  validEnglishError: boolean=false;
  validComputerError: boolean=false;

  constructor() {
  }

  ngOnInit() {
    var existingStudents = sessionStorage.getItem('students');
    if (existingStudents) {
      this.students = JSON.parse(existingStudents);
    }
    else {
      this.students = [];
      this.students?.push({ name: 'kavya', id: '001', science: '50', maths: '10', english: '20', social: '80', computer: '50', studenttype: 'R' },
        { name: 'Idha', id: '002', science: '50', maths: '30', english: '80', social: '50', computer: '40', studenttype: 'E' },
        { name: 'Yuvin', id: '003', science: '30', maths: '60', english: '40', social: '50', computer: '60', studenttype: 'R' },
        { name: 'Ira', id: '004', science: '40', maths: '30', english: '10', social: '80', computer: '40', studenttype: 'E' },
        { name: 'Kevin', id: '005', science: '50', maths: '50', english: '50', social: '50', computer: '50', studenttype: 'R' },
      );
    }

    this.filterStudent = this.students;
  }

  ngAfterViewInit() {
    const modalElementAdd = document.getElementById('addModal');

    if (modalElementAdd) {
      this.modalRefAdd = new bootstrap.Modal(modalElementAdd); // @ts-ignore for TS to ignore bootstrap global

    }

  }

  deleteSelected(){
var selectedStudents=this.students.filter((student:any)=>student.isSelected);
console.log(selectedStudents)

selectedStudents.forEach((student:any)=>{
  var index=this.students.indexOf(student);
  this.students.splice(index,1)

});
this.filterStudent=this.students;

if(!this.students||this.students.length==0){
this.students=[];
sessionStorage.removeItem('students');
}
else{
  sessionStorage.setItem('students',JSON.stringify(this.students));
}

  }

selectAll(event:any){
this.students.forEach((student:any)=>{
student.isSelected=event.target.checked;
});

  }
  get allSelected(){
  return this.students.every((student:any)=>student.isSelected);
  }

  onAddStudent() {
    this.modalRefAdd.show();
    this.clearModel();
    this.idDisable = false;
    this.name = '';
    this.id = '';
    this.science = '';
    this.math = '';
    this.english = '';
    this.social = '';
    this.computer = '';
    this.studenttype = '';
  }
  searchStudents(event: any) {
    const searchTerm = event.target.value.toLowerCase();
    this.filterStudent = this.students.filter((student: any) =>
      student.name.toLowerCase().includes(searchTerm)

    );



  }
  clearModel(){
    this.requiredname=false;
    this.requiredid=false;
    this.requiredsubject=false;
    this.requiredstudenttype=false;
    this.duplicateId=false;
  }

  validation() {
    this.duplicateId = false;
    var isValid = true;
    if (!this.name) {
      this.requiredname = true;
      isValid = false;
    }
    else {
      this.requiredname = false;
    }

    if (!this.id) {
      this.requiredid = true;
      isValid = false;

    }
    else {
     
      if (!this.idDisable) {
        var isIdExist = this.students.some((student: any) => student.id == this.id);
        if (isIdExist) {
          this.duplicateId = true;
          isValid = false;
        }
      }
      this.requiredid = false;

    }

    if (!this.science || !this.math || !this.english || !this.social || !this.computer) {
      this.requiredsubject = true;
      isValid = false;
    }
    else {
      const numberOnlyRegex = /^[0-9]*$/;
      debugger;
      this.requiredsubject = false;
      this.validScienceError=false;
      
    if(!numberOnlyRegex.test(this.science)|| this.science>100){
        this.validScienceError=true;
        isValid=false;
    }
    if(!numberOnlyRegex.test(this.math)|| this.math>100)
      {
this.validMathError=true;
isValid=false;
      }
      if(!numberOnlyRegex.test(this.english)|| this.english>100)
      {
this.validEnglishError=true;
isValid=false;
      }
      if(!numberOnlyRegex.test(this.social)|| this.social>100)
      {
this.validSocialError=true;
isValid=false;
      }
      if(!numberOnlyRegex.test(this.computer)|| this.computer>100)
      {
this.validComputerError=true;
isValid=false;
      }
    }
     
    if (!this.studenttype) {
      this.requiredstudenttype = true;
      isValid = false;
    }
    else {
      this.requiredstudenttype = false;
    }
    return isValid;
  }


  save() {
    this.clearModel();
    var validationSucees = this.validation();
    if (!validationSucees) {
      return;
    }
    else {
      if (!this.idDisable) {
      this.students.push({ name: this.name, id: this.id, science: this.science, maths: this.math, english: this.english, social: this.social, computer: this.computer, studenttype: this.studenttype });
      }
      else { 
        this.students.forEach((student:any)=>{
          if(student.id==this.id){
            student.name=this.name;
            student.science=this.science;
            student.maths=this.math;
            student.english=this.english;
            student.social=this.social;
            student.computer=this.computer;

          }
        });
      }
      sessionStorage.setItem('students', JSON.stringify(this.students));
      this.modalRefAdd.hide();
      this.clearModel();
      this.filterStudent = this.students;
      this.name = '';
      this.id = '';
      this.science = '';
      this.math = '';
      this.english = '';
      this.social = '';
      this.computer = '';
      this.studenttype = '';

    }


  }

  onEditStudent(rowdata: any) {
    this.idDisable = true;
    this.name = rowdata.name;
    this.id = rowdata.id;
    this.science = rowdata.science;
    this.math = rowdata.maths;
    this.english = rowdata.english;
    this.social = rowdata.social;
    this.computer = rowdata.computer;
    this.studenttype = rowdata.studenttype;
    this.modalRefAdd.show();
    
    
  }
  onDeleteStudent(index:any) {
  
   this.students.splice(index,1);
   this.filterStudent = this.students;
   sessionStorage.setItem('students', JSON.stringify(this.students));
  }

  calculateGrade(rowdata: any) {

    const marks = rowdata.science + rowdata.maths + rowdata.english + rowdata.social + rowdata.computer;
    const average = marks / 5;
    let grade = '';
    if (rowdata.studenttype == 'E') {
      if (average >= 60) {
        grade = 'Pass';
      }
      else {
        grade = 'Fail';
      }
    }
    else {
      if (average >= 90) {
        grade = 'A+';
      }
      else if (average >= 80) {
        grade = 'A';
      }
      else if (average >= 70) {
        grade = 'B';
      }
      else {
        grade = 'C';
      }
    }
    return grade;
  }

}
import { Injectable, OnDestroy, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public data: string = '';
  public lastVisitor: string = '';
  public search_first_name: string = '';
  public search_last_name: string = '';
  public search_visitor_type: string = '';
  public search_company_name: string = '';
  public search_mobile_number: string = '';
  setSchoolName(name: string): void {
    this.data = name;
  }

  getSchoolName(): string {
    return this.data;
  }

  setLastVisitor(visitor: string): void {
    this.lastVisitor = visitor;
  }

  getLastVisitor(): string {
    return this.lastVisitor;
  }

  setSearchFirstName(fname: string): void {
    this.search_first_name = fname;
  }

  getSearchFirstName(): string {
    return this.search_first_name;
  }

  setSearchLastName(lname: string): void {
    this.search_last_name = lname;
  }

  getSearchLastName(): string {
    return this.search_last_name;
  }

  setSearchVisitorType(type: string): void {
    this.search_visitor_type = type;
  }

  getSearchVisitorType(): string {
    return this.search_visitor_type;
  }

  setSearchCompanyName(company: string): void {
    this.search_company_name = company;
  }

  getSearchCompanyName(): string {
    return this.search_company_name;
  }

  setSearchMobileNumber(number: string): void {
    this.search_mobile_number = number;
  }

  getSearchMobileNumber(): string {
    return this.search_mobile_number;
  }
}

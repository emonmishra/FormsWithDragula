/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {Field} from './models';

describe('GtForm Field object', () => {
  it('should create an instance', () => {
    let data = {
      id: 'hello',
      name: 'name',
      title: 'title',
      description: 'description',
      dataType: 'integer',
      fk: true,
      fk_reference: 'tblstatus'
    };
    let f = new Field(data);
    expect(f.id).toBe("hello");
    expect(f.name).toBe("name");
    expect(f.title).toBe("title");
    expect(f.description).toBe("description");
    expect(f.dataType).toBe("integer");
    expect(f.fk).toBeTruthy();
    expect(f.fkReference).toBe("tblstatus");
  });
});

});

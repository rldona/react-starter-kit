import axios from 'axios';

import getPhoneList from './phone-list-service';

jest.mock('axios');

describe('getPhoneList', () => {
  it('should fetch a list of phones', async () => {
    const data = [
      {id: 1, name: 'iPhone 11'},
      {id: 2, name: 'Samsung Galaxy S10'},
    ];

    (axios.get as jest.Mock).mockResolvedValue({data});

    const phoneList = await getPhoneList();

    expect(phoneList).toEqual(data);
  });
});

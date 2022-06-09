import axios from 'axios';
import getPhoneList from '../services/phone-list-service';

jest.mock('axios');

describe('getPhoneList', () => {
  it('should return a empty array when no data is returned', async () => {
    (axios.get as jest.Mock).mockResolvedValue({data: []});
    const result = await getPhoneList();
    expect(result).toEqual([]);
  });

  it('should return a list of phones', async () => {
    const phones = [
      {
        id: 1,
        name: 'iPhone X',
        manufacturer: 'Apple',
        description:
          'iPhone X features a new all-screen design. Face ID, which makes your face your password',
        color: 'space gray',
        price: 999,
        imageFileName: 'IPhone_X.png',
        screen: '5.8 inches',
        processor: 'A11 Bionic chip with 64-bit architecture',
        ram: 3,
      },
      {
        id: 2,
        name: 'Galaxy S8',
        manufacturer: 'Samsung',
        description:
          'Introducing the smartphone your life can not do without, The Samsung Galaxy S8. Packed with features to keep you both productive and entertained, all in a sleek, slim design that fits comfortably in your hand or pocket.',
        color: 'midnight black',
        price: 799,
        imageFileName: 'Galaxy_S8.png',
        screen: '5.8 inches',
        processor: 'Octa-core (4x2.3 GHz & 4x1.7 GHz)',
        ram: 4,
      },
    ];

    (axios.get as jest.Mock).mockResolvedValue({data: phones});

    const result = await getPhoneList();

    expect(result).toEqual(phones);
  });

  it('should return an error', async () => {
    (axios.get as jest.Mock).mockRejectedValue({message: 'error'});

    try {
      await getPhoneList();
    } catch (error) {
      expect(error).toEqual({message: 'error'});
    }
  });
});

export const userConfig = {
    username: { label: 'Email', type: 'email', required: true, editable : false },
    password: { label: 'Password', type: 'password', required: true, editable : false },
    name: { label: 'Name', type: 'text', required: true, editable : true },
    address: { label: 'Address', type: 'text', required: true, editable : true },
    phone: { label: 'Phone', type: 'tel', required: true, editable : true },
    baby_birthdate: { label: 'Baby Birthday', type: 'date', required: true, editable : true },
    milk_bag_link: { label: 'Preferred Bag', type: 'text', required: false, editable : true }
  }
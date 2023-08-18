import { Block } from 'payload/types';

const GiveGifts: Block = {
  slug: 'giveGifts', // required
  labels: {
    singular: "礼物",
    plural: "礼物",
  },
  imageURL: 'https://res.cloudinary.com/protime-tef/image/upload/c_pad,h_120,w_64/v1686820415/icon_text_twpar3.png',
  fields: [
    {
      type:'row',
      fields:[
    {
      name:"gift",
      label: "礼物",
      type:"relationship",
      relationTo:["gifts"],
      admin:{
        width:"60%",
      }
    }, 
    {
      name: 'calculateType', // required
      label: "数量",
      type: 'select', // required
      hasMany: false,
      options: [
        {
          label: '固定值',
          value: 'static',
        },
        {
          label: '按购买件数计算',
          value: 'dynamic',
        },
        {
          label: '按购买金额的计算',
          value: 'dynamic',
        },
      ],
      admin:{
        width:"20%",
              style: {
                alignSelf: 'flex-end',
              },
      }
    },
    {
      name: 'formula', // required
      label: "公式",
      type: 'text', // required
      admin:{
        width:"20%",
      }
    }
  ],
},
  ]
};


export default GiveGifts;
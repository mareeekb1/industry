// Naprogramuj prosim jednoduchu aplikaciu kde bude:
// 1. Zoznam zakaznikov (id, meno, datum narodenia, ci je vip, celkova suma objednavok), prelink napr kliknutim na idcko na detail
// 2. Detail zakaznika (id, meno, datum narodenia ci je vip) a zoznam jeho objednavok (id, datum objednania, suma, pocet produktov)
export const test_data = [
    {
        id:1,
        name:'Marek',
        birth_date: '1999-05-25',
        is_vip:true,
        sum_of_orders:1000,
        orders:[
            {
                id:1,
                orderd_date:'2021-11-01',
                sum:500,
                number_of_products:5,
            },
            {
                id:2,
                orderd_date:'2021-11-01',
                sum:500,
                number_of_products:5,
            },
        ]
    },
    {
        id:2,
        name:'Filip',
        birth_date: '1999-02-12',
        is_vip:false,
        sum_of_orders:2000,
        orders:[
            {
                id:3,
                orderd_date:'2021-11-01',
                sum:500,
                number_of_products:5,
            },
            {
                id:4,
                orderd_date:'2021-11-01',
                sum:1500,
                number_of_products:5,
            },
        ]
    },
]
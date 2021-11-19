export const AllCustomersQuery = `
query {
    Customers {
      orders {
        customer_id
        date_of_order
        id
        number_of_products
        sum_of_order
      }
      birth_date
      id
      is_vip
      name
    }
  }
`;
export const GetCustomerByIdQuery = `
query ($id:Int!) {
    Customers_by_pk( id : $id) {
        birth_date
        id
        is_vip
        name
        orders {
            date_of_order
            id
            sum_of_order
            number_of_products
        }
    }
}`;

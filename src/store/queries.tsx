export const AllCustomersQuery = `
  query {
    Customers {
      id
      name
      is_vip
      birth_date
        orders_aggregate {
        aggregate {
          sum {
            sum_of_order
          }
        }
      }
    }
  }`;

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

let customers = [
  { id: 1, name: 'Customer 1', age: 18, address: 'HN' },
  { id: 2, name: 'Customer 2', age: 10, address: 'HD' },
  { id: 3, name: 'Customer 3', age: 25, address: 'HD' },
  { id: 4, name: 'Customer 4', age: 20, address: 'HD' },
];

class CustomerController {
  get = (req, res, next) => {
    try {
      const customerById = req.params.id
      const { age, address } = req.query
      let result = [...customers]
      // http://localhost:3000/v1/customers/1
      if (customerById) {
        const customer = customers.find(customer => customer.id === parseInt(customerById))
        result = customer ? [customer] : []
      }
      // http://localhost:3000/v1/customers?age=18&address=HD
      if (age !== undefined || address !== undefined) {
        result = result.filter(customer => customer.age >= parseInt(age || 0) && customer.address === (address || ''))
      }

      console.log(result)
      res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }
  create = (req, res, next) => {
    try {
      const { id, name, age, address } = req.body
      console.log(req.body);
      res.status(200).json({
        id,
        name,
        age,
        address
      })
    } catch (error) {
      next(error)
    }
  }
  update = (req, res, next) => {
    try {
      const customerId = req.params.id
      const updatedCustomerData = req.body
      console.log(customerId)
      console.log(updatedCustomerData)

      customers = customers.map((customer) =>
        customer.id === parseInt(customerId) ? { ...customer, ...updatedCustomerData } : customer
      )
      console.log(customers);
      res.status(200).json({ customers })
    } catch (error) {
      next(error)
    }
  }
  delete = (req, res, next) => {
    try {
      const customerId = req.params.id
      console.log(customerId);

      customers = customers.filter(customer => customer.id !== parseInt(customerId))

      console.log({ customers })
      res.status(200).json({ customers })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new CustomerController()
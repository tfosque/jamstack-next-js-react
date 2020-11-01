import { Component } from 'react'
import axios from 'axios'
import Cart from '../components/cart'

class CartContainer extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.fetchCart();
    }

    fetchCart() {
        axios.get('http://localhost:3000/api/cart')
            .then(res => {
                this.setState({products: res.data})
                console.log(this.state)
                
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return(
            <div className="mt-4"><Cart /></div>
        )
    }
}

export default CartContainer
/* export async function getServerSideProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  } */
import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import { Categories, PizzaBlock, PizzaLoadingBlock, SortPopup } from "../components";

import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]
const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alphabet' }
]

function Home() {
    const dispatch = useDispatch()
    const items = useSelector(({ pizzas }) => pizzas.items)
    const cartItems = useSelector(({ cart }) => cart.items)
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
    const { category, sortBy } = useSelector(({ filters }) => filters)

    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [category, sortBy])

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])

    const handleAddPizzaToCart = obj => {
        dispatch({
            type: 'ADD_PIZZA_CART',
            payload: obj,
    })
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories activeCategory={category}
                    onClickItem={onSelectCategory}
                    items={categoryNames} />
                <SortPopup activeSortType={sortBy.type}
                    items={sortItems}
                    onClickSortType={onSelectSortType} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoaded
                        ? items.map(obj => <PizzaBlock 
                            key={obj.id}
                            addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                            {...obj}
                            onClickAddPizza={handleAddPizzaToCart} />)
                        : Array(12)
                            .fill(0)
                            .map((_, i) => (<PizzaLoadingBlock key={i} />))
                }
            </div>
        </div>
    )
}

export default Home;
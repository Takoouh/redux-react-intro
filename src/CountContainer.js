import React from 'react'
import { connect } from "react-redux"

const mapStateToProps = state => ({
  count: state
})

const mapDispatchToProps = dispatch => ({
  add: () => dispatch({ type: "ADD" }),
  remove: () => dispatch({ type: "REMOVE" }),
  add10: () => dispatch({ type: "ADD10" }),
  remove10: () => dispatch({ type: "REMOVE10" }),
  reset: () => dispatch({ type: "RESET" }),
})


const CountComponent = ({ count, add, remove, add10, remove10, reset }) => (
  <div>
    <p id="render-store">{count}</p>
    <button onClick={add} id="add">+</button>
    <button onClick={remove} id="remove">-</button>
    <button onClick={add10} id="add10">+10</button>
    <button onClick={remove10} id="remove10">-10</button>
    <button onClick={reset} id="reset">reset</button>
  </div>
)
export default connect(mapStateToProps, mapDispatchToProps)(CountComponent)


const appState = {
    title: {
        text: '阿星Plus',
        color: 'red',
    },
    content: {
        text: '阿星Plus的内容',
        color: 'blue'
    }
}

function renderApp(appState) {
    renderTitle(appState.title)
    renderContent(appState.content)
}

function renderTitle(title) {
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = title.text
    titleDOM.style.color = title.color
}

function renderContent(content) {
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = content.text
    contentDOM.style.color = content.color
}

function createStore(state, stateChanger) {
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        stateChanger(state, action)
        listeners.forEach((listener) => listener())
    }
    return { getState, dispatch, subscribe }
}

function stateChanger(state, action) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            state.title.text = action.text
            break
        case 'UPDATE_TITLE_COLOR':
            state.title.color = action.color
            break
        default:
            break
    }
}

// function dispatch(action) {
//     switch (action.type) {
//         case 'UPDATE_TITLE_TEXT':
//             appState.title.text = action.text
//             break
//         case 'UPDATE_TITLE_COLOR':
//             appState.title.color = action.color
//             break
//         default:
//             break
//     }
// }

const store = createStore(appState, stateChanger)

store.subscribe(() => renderApp(store.getState()))

// renderApp(appState) // 首次渲染页面
// dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《哈哈哈哈哈》' }) // 修改标题文本
// dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'green' }) // 修改标题颜色
// renderApp(appState) // 把新的数据渲染到页面上


renderApp(store.getState()) // 首次渲染页面
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《哈哈哈哈哈》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'green' }) // 修改标题颜色
// renderApp(store.getState()) // 把新的数据渲染到页面上
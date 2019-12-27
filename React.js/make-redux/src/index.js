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

// function renderApp(appState) {
//     console.log('render app...')

//     renderTitle(appState.title)
//     renderContent(appState.content)
// }

// function renderTitle(title) {
//     console.log('render title...')

//     const titleDOM = document.getElementById('title')
//     titleDOM.innerHTML = title.text
//     titleDOM.style.color = title.color
// }

// function renderContent(content) {
//     console.log('render content...')

//     const contentDOM = document.getElementById('content')
//     contentDOM.innerHTML = content.text
//     contentDOM.style.color = content.color
// }

// 防止 oldAppState 没有传入，所以加了默认参数 oldAppState = {}
function renderApp(newAppState, oldAppState = {}) {
    // 数据没有变化就不渲染了    
    if (newAppState === oldAppState) return
    console.log('render app...')
    renderTitle(newAppState.title, oldAppState.title)
    renderContent(newAppState.content, oldAppState.content)
}

function renderTitle(newTitle, oldTitle = {}) {
    if (newTitle === oldTitle) return
    console.log('render title...')
    const titleDOM = document.getElementById('title')
    titleDOM.innerHTML = newTitle.text
    titleDOM.style.color = newTitle.color
}

function renderContent(newContent, oldContent = {}) {
    if (newContent === oldContent) return
    console.log('render content...')
    const contentDOM = document.getElementById('content')
    contentDOM.innerHTML = newContent.text
    contentDOM.style.color = newContent.color
}

function createStore(state, stateChanger) {
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
        state = stateChanger(state, action) // 覆盖原对象
        listeners.forEach((listener) => listener())
    }
    return { getState, dispatch, subscribe }
}

// function stateChanger(state, action) {
//     switch (action.type) {
//         case 'UPDATE_TITLE_TEXT':
//             state.title.text = action.text
//             break
//         case 'UPDATE_TITLE_COLOR':
//             state.title.color = action.color
//             break
//         default:
//             break
//     }
// }

function stateChanger(state, action) {
    switch (action.type) {
        case 'UPDATE_TITLE_TEXT':
            return { // 构建新的对象并且返回
                ...state,
                title: {
                    ...state.title,
                    text: action.text
                }
            }
        case 'UPDATE_TITLE_COLOR':
            return { // 构建新的对象并且返回
                ...state,
                title: {
                    ...state.title,
                    color: action.color
                }
            }
        default:
            return state // 没有修改，返回原来的对象
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

let oldState = store.getState() // 缓存旧的 state

// store.subscribe(() => renderApp(store.getState()))

store.subscribe(() => {
    const newState = store.getState() // 数据可能变化，获取新的 state
    renderApp(newState, oldState) // 把新旧的 state 传进去渲染
    oldState = newState // 渲染完以后，新的 newState 变成了旧的 oldState，等待下一次数据变化重新渲染
})

// renderApp(appState) // 首次渲染页面
// dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《哈哈哈哈哈》' }) // 修改标题文本
// dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'green' }) // 修改标题颜色
// renderApp(appState) // 把新的数据渲染到页面上

renderApp(store.getState()) // 首次渲染页面
store.dispatch({ type: 'UPDATE_TITLE_TEXT', text: '《哈哈哈哈哈》' }) // 修改标题文本
store.dispatch({ type: 'UPDATE_TITLE_COLOR', color: 'green' }) // 修改标题颜色
// renderApp(store.getState()) // 把新的数据渲染到页面上
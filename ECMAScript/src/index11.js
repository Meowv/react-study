let json = {
    name: 'qix',
    skill: 'web'
}
console.log(json.name)

var map = new Map();
map.set(json, 'iam');
console.log(map);

map.set('qix', json);
console.log(map);

// 取值get
console.log(map.get(json));

// 删除delete
map.delete(json);
console.log(map);

// size属性
console.log(map.size);

// 是否存在has
console.log(map.has('qix'));

// 清除所有元素clear
map.clear();
console.log(map);
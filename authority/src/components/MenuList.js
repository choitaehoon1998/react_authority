import React, { useEffect, useState } from 'react';
import { API_URL } from '../utils/api';
import {Tree} from 'antd';
import 'antd/dist/antd.css';

const { DirectoryTree } = Tree;
const treeData = [
    {
        title: 'parent 0',
        key: '0-0',
        children: [
          {
            title: 'leaf 0-0',
            key: '0-0-0',
            isLeaf: true,
          },
          {
            title: 'leaf 0-1',
            key: '0-0-1',
            isLeaf: true,
          },
        ],
    }
]
const onSelect = (keys,info) => {
    console.log('Trigger Select',keys,info);
};

const onExpand = () => {
    console.log('Trigger Expand');
};

function MenuList(){
    const [menuData,setMenuData] = useState([]);
    useEffect(() => {
        fetch(API_URL+"/menu")
        .then(res => res.json())
        .then((result) => {
            result.forEach(r => {
                r.title = r.menuNm;
                r.key = r.indexNo;
                r.children.forEach(child => {
                    child.title = child.menuNm;
                    child.key = child.indexNo;
                    if(child.children.length === 0){
                        child.isLeaf = true;
                    }
                })
            })
            setMenuData([...menuData,...result]);
        })
    },[])
    return (
        <div style={{padding:'0 5px'}}>
            <h2>메뉴 목록</h2>
            <div style={{border:'2px solid black', height:'800px', paddingLeft:'5px'}}>
            <DirectoryTree 
                // multiple
                defaultExpandAll
                onSelect={onSelect}
                onExpand={onExpand}
                treeData={menuData}>

            </DirectoryTree>
            </div>
        </div>
    )
}
export default MenuList;
import React, { useEffect, useState } from 'react';
import { API_URL } from '../utils/api';
import {Tree} from 'antd';
import 'antd/dist/antd.min.css';

const { DirectoryTree } = Tree;


const onExpand = () => {
    console.log('Trigger Expand');
};

function MenuList(props){
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

    const onSelect = (keys,info) => {
        console.log('Trigger Select',keys,info);
        props.setIdx(keys[0]);  
    };
    return (
        <div style={{padding:'0 5px'}}>
            <h2>메뉴 목록</h2>
            <div style={{border:'2px solid black', height:'600px', paddingLeft:'5px'}}>
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
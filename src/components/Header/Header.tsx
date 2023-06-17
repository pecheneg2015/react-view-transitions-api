import React from "react";
import {CustomLink} from "components";
// @ts-ignore
import {RoutesList} from "constants";

export const Header = ()=>{
    return    <div className='bg-white px-6 py-4 flex flex-col gap-2 lg:flex-row drop-shadow-lg'>
        <CustomLink to={RoutesList.Main}>Main</CustomLink>
        <CustomLink to={RoutesList.Help}>Help</CustomLink>
        <CustomLink to={RoutesList.About}>About</CustomLink>
        <CustomLink to={RoutesList.Counter}>Counter</CustomLink>
    </div>
}
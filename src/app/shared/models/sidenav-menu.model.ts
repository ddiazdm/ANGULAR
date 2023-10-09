

export class SidenavMenuItem {

    text     : string | undefined
    isOpened : boolean | undefined
    submenu  : SidenavSubMenuItem | undefined
    link     : string | undefined
    childrens: SidenavSubMenuItem[] | undefined

}

export class SidenavSubMenuItem {

    text     : string | undefined
    isOpened : boolean | undefined
    type     : string | undefined
    link     : string | undefined
    childrens: SidenavMenuItemOption[] = [];

}

export class SidenavMenuItemOption {
    type    ?: string
    text    ?: string
    route   ?: string
    isOpened?: boolean


}

export class SidenavSubMenuItemOption {

    text : string | undefined
    route: string | undefined

}

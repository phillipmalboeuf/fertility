import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeGalleryFields {
    title?: EntryFieldTypes.Symbol;
    overlays?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    underlays?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    content?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePlaylistSkeleton | TypeTextSkeleton>>;
    color?: EntryFieldTypes.Symbol;
}

export type TypeGallerySkeleton = EntrySkeletonType<TypeGalleryFields, "gallery">;
export type TypeGallery<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeGallerySkeleton, Modifiers, Locales>;

export function isTypeGallery<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeGallery<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'gallery'
}

export interface TypeLinkFields {
    label?: EntryFieldTypes.Symbol;
    destination?: EntryFieldTypes.Symbol;
    color?: EntryFieldTypes.Symbol;
}

export type TypeLinkSkeleton = EntrySkeletonType<TypeLinkFields, "link">;
export type TypeLink<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeLinkSkeleton, Modifiers, Locales>;

export function isTypeLink<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeLink<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'link'
}

export interface TypeNavigationFields {
    id: EntryFieldTypes.Symbol;
    links?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLinkSkeleton>>;
}

export type TypeNavigationSkeleton = EntrySkeletonType<TypeNavigationFields, "navigation">;
export type TypeNavigation<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeNavigationSkeleton, Modifiers, Locales>;

export function isTypeNavigation<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeNavigation<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'navigation'
}

export interface TypePageFields {
    title?: EntryFieldTypes.Symbol;
    id: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeGallerySkeleton | TypeNavigationSkeleton | TypePlaylistSkeleton | TypeTextSkeleton>>;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;

export function isTypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePage<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'page'
}

export interface TypePlaylistFields {
    title?: EntryFieldTypes.Symbol;
    audioFiles?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    linkLabel?: EntryFieldTypes.Symbol;
    link?: EntryFieldTypes.Symbol;
}

export type TypePlaylistSkeleton = EntrySkeletonType<TypePlaylistFields, "playlist">;
export type TypePlaylist<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePlaylistSkeleton, Modifiers, Locales>;

export function isTypePlaylist<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypePlaylist<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'playlist'
}

export interface TypeSlideFields {
    body?: EntryFieldTypes.RichText;
    media?: EntryFieldTypes.AssetLink;
}

export type TypeSlideSkeleton = EntrySkeletonType<TypeSlideFields, "slide">;
export type TypeSlide<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSlideSkeleton, Modifiers, Locales>;

export function isTypeSlide<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeSlide<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'slide'
}

export interface TypeSliderFields {
    title?: EntryFieldTypes.Symbol;
    id?: EntryFieldTypes.Symbol;
    slides?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSlideSkeleton>>;
}

export type TypeSliderSkeleton = EntrySkeletonType<TypeSliderFields, "slider">;
export type TypeSlider<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSliderSkeleton, Modifiers, Locales>;

export function isTypeSlider<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeSlider<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'slider'
}

export interface TypeTextFields {
    title?: EntryFieldTypes.Symbol;
    id?: EntryFieldTypes.Symbol;
    collapsable?: EntryFieldTypes.Boolean;
    rounded?: EntryFieldTypes.Boolean;
    body?: EntryFieldTypes.RichText;
    more?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePlaylistSkeleton | TypeSliderSkeleton | TypeTextSkeleton>>;
}

export type TypeTextSkeleton = EntrySkeletonType<TypeTextFields, "text">;
export type TypeText<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeTextSkeleton, Modifiers, Locales>;

export function isTypeText<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeText<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'text'
}

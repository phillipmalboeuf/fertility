import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeGalleryFields {
    title?: EntryFieldTypes.Symbol;
    overlays?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    underlays?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    content?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypePlaylistSkeleton | TypeTextSkeleton>>;
}

export type TypeGallerySkeleton = EntrySkeletonType<TypeGalleryFields, "gallery">;
export type TypeGallery<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeGallerySkeleton, Modifiers, Locales>;

export interface TypeLinkFields {
    label?: EntryFieldTypes.Symbol;
    destination?: EntryFieldTypes.Symbol;
    color?: EntryFieldTypes.Symbol;
}

export type TypeLinkSkeleton = EntrySkeletonType<TypeLinkFields, "link">;
export type TypeLink<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeLinkSkeleton, Modifiers, Locales>;

export interface TypeNavigationFields {
    id: EntryFieldTypes.Symbol;
    links?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLinkSkeleton>>;
}

export type TypeNavigationSkeleton = EntrySkeletonType<TypeNavigationFields, "navigation">;
export type TypeNavigation<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeNavigationSkeleton, Modifiers, Locales>;

export interface TypePageFields {
    title?: EntryFieldTypes.Symbol;
    id: EntryFieldTypes.Symbol;
    content?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeGallerySkeleton | TypeNavigationSkeleton | TypePlaylistSkeleton | TypeTextSkeleton>>;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;

export interface TypePlaylistFields {
    title?: EntryFieldTypes.Symbol;
    audioFiles?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
}

export type TypePlaylistSkeleton = EntrySkeletonType<TypePlaylistFields, "playlist">;
export type TypePlaylist<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePlaylistSkeleton, Modifiers, Locales>;

export interface TypeTextFields {
    title?: EntryFieldTypes.Symbol;
    id?: EntryFieldTypes.Symbol;
    collapsable?: EntryFieldTypes.Boolean;
    body?: EntryFieldTypes.RichText;
}

export type TypeTextSkeleton = EntrySkeletonType<TypeTextFields, "text">;
export type TypeText<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeTextSkeleton, Modifiers, Locales>;

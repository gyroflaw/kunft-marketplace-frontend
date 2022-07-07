/* tslint:disable */
/* eslint-disable */

// ######################################## THIS FILE WAS GENERATED BY MONGOOSE-TSGEN ######################################## //

// NOTE: ANY CHANGES MADE WILL BE OVERWRITTEN ON SUBSEQUENT EXECUTIONS OF MONGOOSE-TSGEN.

import mongoose from 'mongoose'

/**
 * Lean version of CollectionDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `CollectionDocument.toObject()`. To avoid conflicts with model names, use the type alias `CollectionObject`.
 * ```
 * const collectionObject = collection.toObject();
 * ```
 */
export type Collection = {
  contractPackageHash: string
  contractHash: string
  slug: string
  symbol: string
  name: string
  description?: string
  verified: boolean
  image?: string
  twitter?: string
  discord?: string
  website?: string
  _id: mongoose.Types.ObjectId
}

/**
 * Lean version of CollectionDocument (type alias of `Collection`)
 *
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { Collection } from "../models"
 * import { CollectionObject } from "../interfaces/mongoose.gen.ts"
 *
 * const collectionObject: CollectionObject = collection.toObject();
 * ```
 */
export type CollectionObject = Collection

/**
 * Mongoose Query type
 *
 * This type is returned from query functions. For most use cases, you should not need to use this type explicitly.
 */
export type CollectionQuery = mongoose.Query<
  any,
  CollectionDocument,
  CollectionQueries
> &
  CollectionQueries

/**
 * Mongoose Query helper types
 *
 * This type represents `CollectionSchema.query`. For most use cases, you should not need to use this type explicitly.
 */
export type CollectionQueries = {}

export type CollectionMethods = {}

export type CollectionStatics = {}

/**
 * Mongoose Model type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Collection = mongoose.model<CollectionDocument, CollectionModel>("Collection", CollectionSchema);
 * ```
 */
export type CollectionModel = mongoose.Model<
  CollectionDocument,
  CollectionQueries
> &
  CollectionStatics

/**
 * Mongoose Schema type
 *
 * Assign this type to new Collection schema instances:
 * ```
 * const CollectionSchema: CollectionSchema = new mongoose.Schema({ ... })
 * ```
 */
export type CollectionSchema = mongoose.Schema<
  CollectionDocument,
  CollectionModel,
  CollectionMethods,
  CollectionQueries
>

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Collection = mongoose.model<CollectionDocument, CollectionModel>("Collection", CollectionSchema);
 * ```
 */
export type CollectionDocument = mongoose.Document<
  mongoose.Types.ObjectId,
  CollectionQueries
> &
  CollectionMethods & {
    contractPackageHash: string
    contractHash: string
    slug: string
    symbol: string
    name: string
    description?: string
    verified: boolean
    image?: string
    twitter?: string
    discord?: string
    website?: string
    _id: mongoose.Types.ObjectId
  }

/**
 * Lean version of OfferDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `OfferDocument.toObject()`. To avoid conflicts with model names, use the type alias `OfferObject`.
 * ```
 * const offerObject = offer.toObject();
 * ```
 */
export type Offer = {
  creator: string
  token: Token['_id'] | Token
  payToken?: string
  price: string
  startTime: number
  buyer?: string
  additionalRecipient?: string
  status: 'pending' | 'suceed' | 'canceled'
  _id: mongoose.Types.ObjectId
  updatedAt?: Date
  createdAt?: Date
}

/**
 * Lean version of OfferDocument (type alias of `Offer`)
 *
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { Offer } from "../models"
 * import { OfferObject } from "../interfaces/mongoose.gen.ts"
 *
 * const offerObject: OfferObject = offer.toObject();
 * ```
 */
export type OfferObject = Offer

/**
 * Mongoose Query type
 *
 * This type is returned from query functions. For most use cases, you should not need to use this type explicitly.
 */
export type OfferQuery = mongoose.Query<any, OfferDocument, OfferQueries> &
  OfferQueries

/**
 * Mongoose Query helper types
 *
 * This type represents `OfferSchema.query`. For most use cases, you should not need to use this type explicitly.
 */
export type OfferQueries = {}

export type OfferMethods = {}

export type OfferStatics = {}

/**
 * Mongoose Model type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Offer = mongoose.model<OfferDocument, OfferModel>("Offer", OfferSchema);
 * ```
 */
export type OfferModel = mongoose.Model<OfferDocument, OfferQueries> &
  OfferStatics

/**
 * Mongoose Schema type
 *
 * Assign this type to new Offer schema instances:
 * ```
 * const OfferSchema: OfferSchema = new mongoose.Schema({ ... })
 * ```
 */
export type OfferSchema = mongoose.Schema<
  OfferDocument,
  OfferModel,
  OfferMethods,
  OfferQueries
>

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Offer = mongoose.model<OfferDocument, OfferModel>("Offer", OfferSchema);
 * ```
 */
export type OfferDocument = mongoose.Document<
  mongoose.Types.ObjectId,
  OfferQueries
> &
  OfferMethods & {
    creator: string
    token: TokenDocument['_id'] | TokenDocument
    payToken?: string
    price: string
    startTime: number
    buyer?: string
    additionalRecipient?: string
    status: 'pending' | 'suceed' | 'canceled'
    _id: mongoose.Types.ObjectId
    updatedAt?: Date
    createdAt?: Date
  }

/**
 * Lean version of SaleDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `SaleDocument.toObject()`. To avoid conflicts with model names, use the type alias `SaleObject`.
 * ```
 * const saleObject = sale.toObject();
 * ```
 */
export type Sale = {
  creator: string
  token: Token['_id'] | Token
  buyer?: string
  payToken?: string
  price: string
  startTime: number
  additionalRecipient?: string
  status: 'pending' | 'suceed' | 'canceled'
  _id: mongoose.Types.ObjectId
  updatedAt?: Date
  createdAt?: Date
}

/**
 * Lean version of SaleDocument (type alias of `Sale`)
 *
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { Sale } from "../models"
 * import { SaleObject } from "../interfaces/mongoose.gen.ts"
 *
 * const saleObject: SaleObject = sale.toObject();
 * ```
 */
export type SaleObject = Sale

/**
 * Mongoose Query type
 *
 * This type is returned from query functions. For most use cases, you should not need to use this type explicitly.
 */
export type SaleQuery = mongoose.Query<any, SaleDocument, SaleQueries> &
  SaleQueries

/**
 * Mongoose Query helper types
 *
 * This type represents `SaleSchema.query`. For most use cases, you should not need to use this type explicitly.
 */
export type SaleQueries = {}

export type SaleMethods = {}

export type SaleStatics = {}

/**
 * Mongoose Model type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Sale = mongoose.model<SaleDocument, SaleModel>("Sale", SaleSchema);
 * ```
 */
export type SaleModel = mongoose.Model<SaleDocument, SaleQueries> & SaleStatics

/**
 * Mongoose Schema type
 *
 * Assign this type to new Sale schema instances:
 * ```
 * const SaleSchema: SaleSchema = new mongoose.Schema({ ... })
 * ```
 */
export type SaleSchema = mongoose.Schema<
  SaleDocument,
  SaleModel,
  SaleMethods,
  SaleQueries
>

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Sale = mongoose.model<SaleDocument, SaleModel>("Sale", SaleSchema);
 * ```
 */
export type SaleDocument = mongoose.Document<
  mongoose.Types.ObjectId,
  SaleQueries
> &
  SaleMethods & {
    creator: string
    token: TokenDocument['_id'] | TokenDocument
    buyer?: string
    payToken?: string
    price: string
    startTime: number
    additionalRecipient?: string
    status: 'pending' | 'suceed' | 'canceled'
    _id: mongoose.Types.ObjectId
    updatedAt?: Date
    createdAt?: Date
  }

/**
 * Lean version of TokenMetadataDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `TokenDocument.toObject()`.
 * ```
 * const tokenObject = token.toObject();
 * ```
 */
export type TokenMetadata = {
  key?: string
  value?: string
  _id: mongoose.Types.ObjectId
}

/**
 * Lean version of TokenDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `TokenDocument.toObject()`. To avoid conflicts with model names, use the type alias `TokenObject`.
 * ```
 * const tokenObject = token.toObject();
 * ```
 */
export type Token = {
  collectionNFT: Collection['_id'] | Collection
  tokenId: string
  image?: string
  name: string
  owner?: string
  _id: mongoose.Types.ObjectId
  metadata: TokenMetadata[]
}

/**
 * Lean version of TokenDocument (type alias of `Token`)
 *
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { Token } from "../models"
 * import { TokenObject } from "../interfaces/mongoose.gen.ts"
 *
 * const tokenObject: TokenObject = token.toObject();
 * ```
 */
export type TokenObject = Token

/**
 * Mongoose Query type
 *
 * This type is returned from query functions. For most use cases, you should not need to use this type explicitly.
 */
export type TokenQuery = mongoose.Query<any, TokenDocument, TokenQueries> &
  TokenQueries

/**
 * Mongoose Query helper types
 *
 * This type represents `TokenSchema.query`. For most use cases, you should not need to use this type explicitly.
 */
export type TokenQueries = {}

export type TokenMethods = {}

export type TokenStatics = {}

/**
 * Mongoose Model type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Token = mongoose.model<TokenDocument, TokenModel>("Token", TokenSchema);
 * ```
 */
export type TokenModel = mongoose.Model<TokenDocument, TokenQueries> &
  TokenStatics

/**
 * Mongoose Schema type
 *
 * Assign this type to new Token schema instances:
 * ```
 * const TokenSchema: TokenSchema = new mongoose.Schema({ ... })
 * ```
 */
export type TokenSchema = mongoose.Schema<
  TokenDocument,
  TokenModel,
  TokenMethods,
  TokenQueries
>

/**
 * Mongoose Subdocument type
 *
 * Type of `TokenDocument["metadata"]` element.
 */
export type TokenMetadataDocument = mongoose.Types.Subdocument & {
  key?: string
  value?: string
  _id: mongoose.Types.ObjectId
}

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const Token = mongoose.model<TokenDocument, TokenModel>("Token", TokenSchema);
 * ```
 */
export type TokenDocument = mongoose.Document<
  mongoose.Types.ObjectId,
  TokenQueries
> &
  TokenMethods & {
    collectionNFT: CollectionDocument['_id'] | CollectionDocument
    tokenId: string
    image?: string
    name: string
    owner?: string
    _id: mongoose.Types.ObjectId
    metadata: mongoose.Types.DocumentArray<TokenMetadataDocument>
  }

/**
 * Lean version of UserDocument
 *
 * This has all Mongoose getters & functions removed. This type will be returned from `UserDocument.toObject()`. To avoid conflicts with model names, use the type alias `UserObject`.
 * ```
 * const userObject = user.toObject();
 * ```
 */
export type User = {
  firstName?: string
  lastName?: string
  nonce: string
  publicKey: string
  email?: string
  emailVerified?: boolean
  role?: 'user' | 'admin'
  _id: mongoose.Types.ObjectId
}

/**
 * Lean version of UserDocument (type alias of `User`)
 *
 * Use this type alias to avoid conflicts with model names:
 * ```
 * import { User } from "../models"
 * import { UserObject } from "../interfaces/mongoose.gen.ts"
 *
 * const userObject: UserObject = user.toObject();
 * ```
 */
export type UserObject = User

/**
 * Mongoose Query type
 *
 * This type is returned from query functions. For most use cases, you should not need to use this type explicitly.
 */
export type UserQuery = mongoose.Query<any, UserDocument, UserQueries> &
  UserQueries

/**
 * Mongoose Query helper types
 *
 * This type represents `UserSchema.query`. For most use cases, you should not need to use this type explicitly.
 */
export type UserQueries = {}

export type UserMethods = {
  toJSONObject: (this: UserDocument) => any
}

export type UserStatics = {
  getNonce: (this: UserModel, publicKey: string) => Promise<string | undefined>
  findByPublicKey: (this: UserModel, publicKey: string) => Promise<any>
}

/**
 * Mongoose Model type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const User = mongoose.model<UserDocument, UserModel>("User", UserSchema);
 * ```
 */
export type UserModel = mongoose.Model<UserDocument, UserQueries> & UserStatics

/**
 * Mongoose Schema type
 *
 * Assign this type to new User schema instances:
 * ```
 * const UserSchema: UserSchema = new mongoose.Schema({ ... })
 * ```
 */
export type UserSchema = mongoose.Schema<
  UserDocument,
  UserModel,
  UserMethods,
  UserQueries
>

/**
 * Mongoose Document type
 *
 * Pass this type to the Mongoose Model constructor:
 * ```
 * const User = mongoose.model<UserDocument, UserModel>("User", UserSchema);
 * ```
 */
export type UserDocument = mongoose.Document<
  mongoose.Types.ObjectId,
  UserQueries
> &
  UserMethods & {
    firstName?: string
    lastName?: string
    nonce: string
    publicKey: string
    email?: string
    emailVerified?: boolean
    role?: 'user' | 'admin'
    _id: mongoose.Types.ObjectId
    name: string
  }

/**
 * Check if a property on a document is populated:
 * ```
 * import { IsPopulated } from "../interfaces/mongoose.gen.ts"
 *
 * if (IsPopulated<UserDocument["bestFriend"]>) { ... }
 * ```
 */
export function IsPopulated<T>(doc: T | mongoose.Types.ObjectId): doc is T {
  return doc instanceof mongoose.Document
}

/**
 * Helper type used by `PopulatedDocument`. Returns the parent property of a string
 * representing a nested property (i.e. `friend.user` -> `friend`)
 */
type ParentProperty<T> = T extends `${infer P}.${string}` ? P : never

/**
 * Helper type used by `PopulatedDocument`. Returns the child property of a string
 * representing a nested property (i.e. `friend.user` -> `user`).
 */
type ChildProperty<T> = T extends `${string}.${infer C}` ? C : never

/**
 * Helper type used by `PopulatedDocument`. Removes the `ObjectId` from the general union type generated
 * for ref documents (i.e. `mongoose.Types.ObjectId | UserDocument` -> `UserDocument`)
 */
type PopulatedProperty<Root, T extends keyof Root> = Omit<Root, T> & {
  [ref in T]: Root[T] extends mongoose.Types.Array<infer U>
    ? mongoose.Types.Array<Exclude<U, mongoose.Types.ObjectId>>
    : Exclude<Root[T], mongoose.Types.ObjectId>
}

/**
 * Populate properties on a document type:
 * ```
 * import { PopulatedDocument } from "../interfaces/mongoose.gen.ts"
 *
 * function example(user: PopulatedDocument<UserDocument, "bestFriend">) {
 *   console.log(user.bestFriend._id) // typescript knows this is populated
 * }
 * ```
 */
export type PopulatedDocument<DocType, T> = T extends keyof DocType
  ? PopulatedProperty<DocType, T>
  : ParentProperty<T> extends keyof DocType
  ? Omit<DocType, ParentProperty<T>> & {
      [ref in ParentProperty<T>]: DocType[ParentProperty<T>] extends mongoose.Types.Array<
        infer U
      >
        ? mongoose.Types.Array<
            ChildProperty<T> extends keyof U
              ? PopulatedProperty<U, ChildProperty<T>>
              : PopulatedDocument<U, ChildProperty<T>>
          >
        : ChildProperty<T> extends keyof DocType[ParentProperty<T>]
        ? PopulatedProperty<DocType[ParentProperty<T>], ChildProperty<T>>
        : PopulatedDocument<DocType[ParentProperty<T>], ChildProperty<T>>
    }
  : DocType

/**
 * Helper types used by the populate overloads
 */
type Unarray<T> = T extends Array<infer U> ? U : T
type Modify<T, R> = Omit<T, keyof R> & R

/**
 * Augment mongoose with Query.populate overloads
 */
declare module 'mongoose' {
  interface Query<ResultType, DocType, THelpers = {}> {
    populate<T extends string>(
      path: T,
      select?: string | any,
      model?: string | Model<any, THelpers>,
      match?: any,
    ): Query<
      ResultType extends Array<DocType>
        ? Array<PopulatedDocument<Unarray<ResultType>, T>>
        : ResultType extends DocType
        ? PopulatedDocument<Unarray<ResultType>, T>
        : ResultType,
      DocType,
      THelpers
    > &
      THelpers

    populate<T extends string>(
      options: Modify<PopulateOptions, { path: T }> | Array<PopulateOptions>,
    ): Query<
      ResultType extends Array<DocType>
        ? Array<PopulatedDocument<Unarray<ResultType>, T>>
        : ResultType extends DocType
        ? PopulatedDocument<Unarray<ResultType>, T>
        : ResultType,
      DocType,
      THelpers
    > &
      THelpers
  }
}

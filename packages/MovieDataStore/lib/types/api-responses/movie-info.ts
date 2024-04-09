/*
    This represent the object shape of the response from the API when getting movie info.
*/

export type InfoResult = {
  short: Short;
  imdbId: string;
  top: Top;
  main: Main;
  fake: Fake;
  storyLine: StoryLine;
};

export type Fake = {
  "#TITLE": string;
  "#YEAR": number;
  "#IMDB_ID": string;
  "#RANK": number;
  "#ACTORS": string;
  "#AKA": string;
  "#IMDB_URL": string;
  "#IMDB_IV": string;
  "#IMG_POSTER": string;
  photo_width: number;
  photo_height: number;
};

export type Main = {
  id: string;
  wins: Companies;
  nominations: Companies;
  prestigiousAwardSummary: null;
  ratingsSummary: MainRatingsSummary;
  episodes: Episodes;
  videos: Companies;
  videoStrip: VideoStrip;
  titleMainImages: AlternateVersions;
  productionStatus: ProductionStatus;
  primaryImage: PrimaryImageElement;
  imageUploadLink: Link;
  titleType: MainTitleType;
  cast: Cast;
  creators: Creator[];
  directors: any[];
  writers: any[];
  isAdult: boolean;
  moreLikeThisTitles: MoreLikeThisTitles;
  triviaTotal: Companies;
  trivia: Trivia;
  goofsTotal: Companies;
  goofs: Cast;
  quotesTotal: Companies;
  quotes: Connections;
  crazyCredits: Akas;
  alternateVersions: AlternateVersions;
  connections: Connections;
  soundtrack: Cast;
  titleText: OriginalTitleText;
  originalTitleText: OriginalTitleText;
  releaseYear: Year;
  reviews: Companies;
  featuredReviews: MainFeaturedReviews;
  canRate: CanRate;
  iframeAddReviewLink: Link;
  topQuestions: AlternateVersions;
  faqs: AlternateVersions;
  releaseDate: ReleaseDate;
  countriesOfOrigin: MainCountriesOfOrigin;
  detailsExternalLinks: AlternateVersions;
  spokenLanguages: SpokenLanguages;
  akas: Akas;
  filmingLocations: AlternateVersions;
  production: Production;
  companies: Companies;
  productionBudget: null;
  lifetimeGross: null;
  openingWeekendGross: null;
  worldwideGross: null;
  technicalSpecifications: TechnicalSpecifications;
  runtime: MainRuntime;
  series: null;
  canHaveEpisodes: boolean;
  contributionQuestions: ContributionQuestions;
  __typename: MainTypename;
};

export enum MainTypename {
  Title = "Title",
}

export type Akas = {
  edges: AkasEdge[];
  __typename: string;
};

export type AkasEdge = {
  node: OriginalTitleText;
  __typename: string;
};

export type OriginalTitleText = {
  text: string;
  __typename: OriginalTitleTextTypename;
};

export enum OriginalTitleTextTypename {
  Aka = "Aka",
  CompanyText = "CompanyText",
  CreditCategory = "CreditCategory",
  DisplayableAttribute = "DisplayableAttribute",
  GenreItem = "GenreItem",
  LocalizedDisplayableCount = "LocalizedDisplayableCount",
  NameText = "NameText",
  TitleConnectionCategory = "TitleConnectionCategory",
  TitleKeyword = "TitleKeyword",
  TitleText = "TitleText",
}

export type AlternateVersions = {
  total: number;
  edges: AlternateVersionsEdge[];
  __typename: string;
};

export type AlternateVersionsEdge = {
  node: PurpleNode;
  __typename: string;
};

export type PurpleNode = {
  url?: string;
  label?: string;
  externalLinkRegion?: null;
  __typename: string;
  id?: string;
  question?: PlotText;
  text?: string;
  location?: string;
  attributes?: OriginalTitleText[];
  caption?: PlotText;
  height?: number;
  width?: number;
  attributeId?: string;
  legacyId?: string;
};

export type PlotText = {
  plainText: string;
  __typename: PlotTextTypename;
};

export enum PlotTextTypename {
  Markdown = "Markdown",
}

export type CanRate = {
  isRatable: boolean;
  __typename: CanRateTypename;
};

export enum CanRateTypename {
  CanRate = "CanRate",
}

export type Cast = {
  edges: CastEdge[];
  __typename: string;
};

export type CastEdge = {
  node: FluffyNode;
  __typename: PurpleTypename;
};

export enum PurpleTypename {
  CreditEdge = "CreditEdge",
}

export type FluffyNode = {
  name: Name;
  attributes: null;
  category: PrimaryImageElement;
  characters: Character[];
  episodeCredits: EpisodeCredits;
  __typename: FluffyTypename;
};

export enum FluffyTypename {
  Cast = "Cast",
}

export type PrimaryImageElement = {
  id: string;
  __typename: LanguageTypename;
};

export enum LanguageTypename {
  CountryOfOrigin = "CountryOfOrigin",
  CreditCategory = "CreditCategory",
  DisplayableLanguage = "DisplayableLanguage",
  Image = "Image",
}

export type Character = {
  name: string;
  __typename: CharacterTypename;
};

export enum CharacterTypename {
  Character = "Character",
}

export type EpisodeCredits = {
  total: number;
  yearRange: ReleaseYear;
  __typename: EpisodeCreditsTypename;
};

export enum EpisodeCreditsTypename {
  EpisodeCastConnection = "EpisodeCastConnection",
}

export type ReleaseYear = {
  year: number;
  endYear: number | null;
  __typename: ReleaseYearTypename;
};

export enum ReleaseYearTypename {
  YearRange = "YearRange",
}

export type Name = {
  id: string;
  nameText: OriginalTitleText;
  primaryImage?: ThumbnailClass | null;
  __typename: TentacledTypename;
};

export enum TentacledTypename {
  Name = "Name",
}

export type ThumbnailClass = {
  url: string;
  width: number;
  height: number;
  __typename: ThumbnailTypename;
  caption?: PlotText;
  id?: string;
};

export enum ThumbnailTypename {
  Image = "Image",
  Thumbnail = "Thumbnail",
}

export type Companies = {
  total: number;
  __typename: string;
};

export type Connections = {
  edges: ConnectionsEdge[];
  __typename: string;
};

export type ConnectionsEdge = {
  node: TentacledNode;
  __typename: string;
};

export type TentacledNode = {
  associatedTitle: Title;
  category: OriginalTitleText;
  __typename: string;
};

export type Title = {
  id: string;
  releaseYear: Year;
  titleText: OriginalTitleText;
  originalTitleText: OriginalTitleText;
  series?: null;
  __typename: MainTypename;
};

export type Year = {
  year: number;
  __typename: string;
};

export type ContributionQuestions = {
  contributionLink: Link;
  edges: ContributionQuestionsEdge[];
  __typename: string;
};

export type Link = {
  url: string;
  __typename: string;
};

export type ContributionQuestionsEdge = {
  node: StickyNode;
  __typename: string;
};

export type StickyNode = {
  entity: Entity;
  questionId: string;
  questionText: PlotText;
  contributionLink: Link;
  __typename: string;
};

export type Entity = {
  primaryImage: ThumbnailClass;
  __typename: MainTypename;
};

export type MainCountriesOfOrigin = {
  countries: CurrentProductionStage[];
  __typename: string;
};

export type CurrentProductionStage = {
  id: string;
  text: string;
  __typename: string;
  attributes?: any[];
};

export type Creator = {
  totalCredits: number;
  category: OriginalTitleText;
  credits: Credit[];
  __typename: string;
};

export type Credit = {
  name: Name;
  attributes: null;
  __typename: string;
};

export type Episodes = {
  episodes: Companies;
  seasons: Season[];
  years: Year[];
  totalEpisodes: Companies;
  unknownSeasonEpisodes: Companies;
  topRated: TopRated;
  __typename: string;
};

export type Season = {
  number: number;
  __typename: string;
};

export type TopRated = {
  edges: TopRatedEdge[];
  __typename: string;
};

export type TopRatedEdge = {
  node: IndigoNode;
  __typename: string;
};

export type IndigoNode = {
  ratingsSummary: PurpleRatingsSummary;
  __typename: MainTypename;
};

export type PurpleRatingsSummary = {
  aggregateRating: number;
  __typename: RatingsSummaryTypename;
};

export enum RatingsSummaryTypename {
  RatingsSummary = "RatingsSummary",
}

export type MainFeaturedReviews = {
  edges: PurpleEdge[];
  __typename: string;
};

export type PurpleEdge = {
  node: IndecentNode;
  __typename: string;
};

export type IndecentNode = {
  id: string;
  author: PurpleAuthor;
  summary: Summary;
  text: PurpleText;
  authorRating: number;
  submissionDate: Date;
  helpfulness: Helpfulness;
  __typename: string;
};

export type PurpleAuthor = {
  nickName: string;
  userId: string;
  __typename: string;
};

export type Helpfulness = {
  upVotes: number;
  downVotes: number;
  __typename: string;
};

export type Summary = {
  originalText: string;
  __typename: string;
};

export type PurpleText = {
  originalText: PlotTextClass;
  __typename: string;
};

export type PlotTextClass = {
  plaidHtml: string;
  __typename: PlotTextTypename;
};

export type MoreLikeThisTitles = {
  edges: MoreLikeThisTitlesEdge[];
  __typename: string;
};

export type MoreLikeThisTitlesEdge = {
  node: HilariousNode;
  __typename: StickyTypename;
};

export enum StickyTypename {
  MoreLikeThisEdge = "MoreLikeThisEdge",
}

export type HilariousNode = {
  id: string;
  titleText: OriginalTitleText;
  titleType: NodeTitleType;
  originalTitleText: OriginalTitleText;
  primaryImage: ThumbnailClass;
  releaseYear: ReleaseYear;
  ratingsSummary: TopRatingsSummary;
  runtime: MainRuntime | null;
  certificate: NodeCertificate;
  canRate: CanRate;
  titleGenres: TitleGenres;
  canHaveEpisodes: boolean;
  __typename: MainTypename;
};

export type NodeCertificate = {
  rating: string;
  __typename: CertificateTypename;
};

export enum CertificateTypename {
  Certificate = "Certificate",
}

export type TopRatingsSummary = {
  aggregateRating: number;
  voteCount: number;
  __typename: RatingsSummaryTypename;
};

export type MainRuntime = {
  seconds: number;
  __typename: RuntimeTypename;
};

export enum RuntimeTypename {
  Runtime = "Runtime",
}

export type TitleGenres = {
  genres: Genre[];
  __typename: TitleGenresTypename;
};

export enum TitleGenresTypename {
  TitleGenres = "TitleGenres",
}

export type Genre = {
  genre: OriginalTitleText;
  __typename: IndigoTypename;
};

export enum IndigoTypename {
  TitleGenre = "TitleGenre",
}

export type NodeTitleType = {
  id: ID;
  text: TextEnum;
  canHaveEpisodes: boolean;
  displayableProperty: DisplayableProperty;
  __typename: TitleTypeTypename;
};

export enum TitleTypeTypename {
  TitleType = "TitleType",
}

export type DisplayableProperty = {
  value: PlotText;
  __typename: DisplayablePropertyTypename;
};

export enum DisplayablePropertyTypename {
  DisplayableTitleRuntimeProperty = "DisplayableTitleRuntimeProperty",
  DisplayableTitleTypeProperty = "DisplayableTitleTypeProperty",
}

export enum ID {
  Movie = "movie",
  TvMiniSeries = "tvMiniSeries",
  TvSeries = "tvSeries",
}

export enum TextEnum {
  Movie = "Movie",
  TVMiniSeries = "TV Mini Series",
  TVSeries = "TV Series",
}

export type Production = {
  edges: ProductionEdge[];
  __typename: string;
};

export type ProductionEdge = {
  node: AmbitiousNode;
  __typename: string;
};

export type AmbitiousNode = {
  company: Company;
  __typename: string;
};

export type Company = {
  id: string;
  companyText: OriginalTitleText;
  __typename: string;
};

export type ProductionStatus = {
  currentProductionStage: CurrentProductionStage;
  productionStatusHistory: ProductionStatusHistory[];
  restriction: null;
  __typename: string;
};

export type ProductionStatusHistory = {
  status: CurrentProductionStage;
  __typename: ProductionStatusHistoryTypename;
};

export enum ProductionStatusHistoryTypename {
  ProductionStatusHistory = "ProductionStatusHistory",
}

export type MainRatingsSummary = {
  topRanking: TopRanking;
  __typename: RatingsSummaryTypename;
};

export type TopRanking = {
  id: string;
  text: TextElement;
  rank: number;
  __typename: string;
};

export type TextElement = {
  value: string;
  __typename: DisplayNameTypename;
};

export enum DisplayNameTypename {
  LocalizedString = "LocalizedString",
  TitleTypeCategory = "TitleTypeCategory",
}

export type ReleaseDate = {
  day: number;
  month: number;
  year: number;
  country?: CurrentProductionStage;
  __typename: string;
};

export type SpokenLanguages = {
  spokenLanguages: CurrentProductionStage[];
  __typename: string;
};

export type TechnicalSpecifications = {
  soundMixes: SoundMixes;
  aspectRatios: AspectRatios;
  colorations: Colorations;
  __typename: string;
};

export type AspectRatios = {
  items: AspectRatiosItem[];
  __typename: string;
};

export type AspectRatiosItem = {
  aspectRatio: string;
  attributes: any[];
  __typename: string;
};

export type Colorations = {
  items: ColorationsItem[];
  __typename: string;
};

export type ColorationsItem = {
  text: string;
  location?: string;
  attributes: OriginalTitleText[];
  __typename: string;
  conceptId?: string;
};

export type SoundMixes = {
  items: CurrentProductionStage[];
  __typename: string;
};

export type MainTitleType = {
  id: ID;
  canHaveEpisodes: boolean;
  __typename: TitleTypeTypename;
};

export type Trivia = {
  edges: TriviaEdge[];
  __typename: string;
};

export type TriviaEdge = {
  node: CunningNode;
  __typename: string;
};

export type CunningNode = {
  text: PlotTextClass;
  trademark: null;
  relatedNames: null;
  __typename: string;
};

export type VideoStrip = {
  edges: VideoStripEdge[];
  __typename: string;
};

export type VideoStripEdge = {
  node: MagentaNode;
  __typename: string;
};

export type MagentaNode = {
  id: string;
  contentType: PurpleContentType;
  name: TextElement;
  runtime: PurpleRuntime;
  thumbnail: ThumbnailClass;
  __typename: string;
};

export type PurpleContentType = {
  displayName: TextElement;
  __typename: string;
};

export type PurpleRuntime = {
  value: number;
  __typename: string;
};

export type Short = {
  "@context": string;
  "@type": string;
  url: string;
  name: string;
  image: string;
  description: string;
  review: Review;
  aggregateRating: Rating;
  contentRating: string;
  genre: string[];
  datePublished: Date;
  keywords: string;
  actor: Tor[];
  creator: Tor[];
  trailer: Trailer;
};

export type Tor = {
  "@type": string;
  url: string;
  name?: string;
};

export type Rating = {
  "@type": string;
  ratingCount?: number;
  bestRating: number;
  worstRating: number;
  ratingValue: number;
};

export type Review = {
  "@type": string;
  itemReviewed: ItemReviewed;
  author: ReviewAuthor;
  dateCreated: Date;
  inLanguage: string;
  name: string;
  reviewBody: string;
  reviewRating: Rating;
};

export type ReviewAuthor = {
  "@type": string;
  name: string;
};

export type ItemReviewed = {
  "@type": string;
  url: string;
};

export type Trailer = {
  "@type": string;
  name: string;
  embedUrl: string;
  thumbnail: Thumbnail;
  thumbnailUrl: string;
  url: string;
  description: string;
  duration: string;
  uploadDate: Date;
};

export type Thumbnail = {
  "@type": string;
  contentUrl: string;
};

export type StoryLine = {
  id: string;
  summaries: Outlines;
  outlines: Outlines;
  synopses: Akas;
  storylineKeywords: AlternateVersions;
  taglines: AlternateVersions;
  genres: Genres;
  certificate: StoryLineCertificate;
  parentsGuide: ParentsGuide;
  __typename: MainTypename;
};

export type StoryLineCertificate = {
  rating: string;
  ratingReason: null;
  ratingsBody: null;
  __typename: CertificateTypename;
};

export type Genres = {
  genres: CurrentProductionStage[];
  __typename: string;
};

export type Outlines = {
  edges: OutlinesEdge[];
  __typename: string;
};

export type OutlinesEdge = {
  node: FriskyNode;
  __typename: string;
};

export type FriskyNode = {
  plotText: PlotTextClass;
  experimental_translatedPlotText: null;
  __typename: string;
  author?: string;
};

export type ParentsGuide = {
  guideItems: Companies;
  __typename: string;
};

export type Top = {
  id: string;
  productionStatus: ProductionStatus;
  canHaveEpisodes: boolean;
  series: null;
  titleText: OriginalTitleText;
  titleType: TopTitleType;
  originalTitleText: OriginalTitleText;
  certificate: NodeCertificate;
  releaseYear: ReleaseYear;
  releaseDate: ReleaseDate;
  runtime: TopRuntime;
  canRate: CanRate;
  ratingsSummary: TopRatingsSummary;
  meterRanking: MeterRanking;
  primaryImage: ThumbnailClass;
  images: AlternateVersions;
  videos: Companies;
  primaryVideos: PrimaryVideos;
  externalLinks: Companies;
  metacritic: null;
  keywords: AlternateVersions;
  genres: Genres;
  plot: Plot;
  plotContributionLink: Link;
  credits: Companies;
  principalCredits: PrincipalCredit[];
  reviews: Companies;
  criticReviewsTotal: Companies;
  triviaTotal: Companies;
  engagementStatistics: EngagementStatistics;
  subNavCredits: Companies;
  subNavReviews: Companies;
  subNavTrivia: Companies;
  subNavFaqs: Companies;
  subNavTopQuestions: Companies;
  titleGenres: TitleGenres;
  meta: Meta;
  castPageTitle: CastPageTitle;
  creatorsPageTitle: CreatorsPageTitle[];
  directorsPageTitle: any[];
  countriesOfOrigin: TopCountriesOfOrigin;
  production: Production;
  featuredReviews: TopFeaturedReviews;
  __typename: MainTypename;
};

export type CastPageTitle = {
  edges: CastPageTitleEdge[];
  __typename: string;
};

export type CastPageTitleEdge = {
  node: NodeElement;
  __typename: PurpleTypename;
};

export type NodeElement = {
  name: Name;
  __typename: string;
};

export type TopCountriesOfOrigin = {
  countries: PrimaryImageElement[];
  __typename: string;
};

export type CreatorsPageTitle = {
  credits: NodeElement[];
  __typename: string;
};

export type EngagementStatistics = {
  watchlistStatistics: WatchlistStatistics;
  __typename: string;
};

export type WatchlistStatistics = {
  displayableCount: OriginalTitleText;
  __typename: string;
};

export type TopFeaturedReviews = {
  edges: FluffyEdge[];
  __typename: string;
};

export type FluffyEdge = {
  node: MischievousNode;
  __typename: string;
};

export type MischievousNode = {
  author: FluffyAuthor;
  summary: Summary;
  text: FluffyText;
  authorRating: number;
  submissionDate: Date;
  __typename: string;
};

export type FluffyAuthor = {
  nickName: string;
  __typename: string;
};

export type FluffyText = {
  originalText: PlotText;
  __typename: string;
};

export type Meta = {
  canonicalId: string;
  publicationStatus: string;
  __typename: string;
};

export type MeterRanking = {
  currentRank: number;
  rankChange: RankChange;
  __typename: string;
};

export type RankChange = {
  changeDirection: string;
  difference: number;
  __typename: string;
};

export type Plot = {
  plotText: PlotText;
  language: PrimaryImageElement;
  __typename: string;
};

export type PrimaryVideos = {
  edges: PrimaryVideosEdge[];
  __typename: string;
};

export type PrimaryVideosEdge = {
  node: BraggadociousNode;
  __typename: string;
};

export type BraggadociousNode = {
  id: string;
  createdDate: Date;
  isMature: boolean;
  runtime: PurpleRuntime;
  name: Description;
  description: Description;
  timedTextTracks: any[];
  recommendedTimedTextTrack: null;
  thumbnail: ThumbnailClass;
  primaryTitle: Title;
  playbackURLs: URL[];
  contentType: FluffyContentType;
  previewURLs: URL[];
  __typename: string;
};

export type FluffyContentType = {
  id: string;
  displayName: TextElement;
  __typename: string;
};

export type Description = {
  value: string;
  language: Language;
  __typename: DisplayNameTypename;
};

export enum Language {
  En = "en",
  EnUS = "en-US",
}

export type URL = {
  displayName: Description;
  videoMimeType: string;
  videoDefinition: string;
  url: string;
  __typename: string;
};

export type PrincipalCredit = {
  totalCredits: number;
  category: CurrentProductionStage;
  credits: Credit[];
  __typename: string;
};

export type TopRuntime = {
  seconds: number;
  displayableProperty: DisplayableProperty;
  __typename: RuntimeTypename;
};

export type TopTitleType = {
  displayableProperty: DisplayableProperty;
  text: TextEnum;
  id: ID;
  isSeries: boolean;
  isEpisode: boolean;
  categories: TextElement[];
  canHaveEpisodes: boolean;
  __typename: TitleTypeTypename;
};

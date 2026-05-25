export type NovaRomaSource = {
  id: string;
  title: string;
  url: string;
  publisher: string;
  sourceType: "store" | "announcement" | "official-site" | "wiki" | "database" | "other";
  lastChecked: string;
  confidence: "high" | "medium" | "needs verification";
  notes: string;
};

export type NovaRomaGuideRelatedDataLink = {
  label: string;
  href: string;
};

export type NovaRomaGuideArticleBlock =
  | {
      type: "heading";
      level: 2 | 3;
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      ordered: boolean;
      items: string[];
    };

export type NovaRomaGuideArticle = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  lastChecked: string;
  confidence: "high" | "medium" | "needs verification";
  patchSensitivity: "low" | "medium" | "high";
  sourceUrls: string[];
  relatedDataLinks?: NovaRomaGuideRelatedDataLink[];
  content: string;
  fileName: string;
  readingTimeMinutes: number;
  blocks: NovaRomaGuideArticleBlock[];
};

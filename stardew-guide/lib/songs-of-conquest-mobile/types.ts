export type SongsOfConquestMobileSource = {
  id: string;
  title: string;
  url: string;
  publisher: string;
  sourceType: "store" | "announcement" | "official-site" | "wiki" | "database" | "other";
  lastChecked: string;
  confidence: "high" | "medium" | "needs verification";
  notes: string;
};

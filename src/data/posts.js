// Blog posts — one per Namaste AI episode, plus one summary post per season.
// `project` is optional: only attach it on episodes where you built something (e.g. the tokenizer).
//
// Shape:
// {
//   slug: 'unique-url-slug',
//   title: 'Ep 1: ...',
//   type: 'episode' | 'season-summary',
//   season: 1,
//   episode: 1,            // omit for season-summary posts
//   date: 'YYYY-MM-DD',
//   summary: 'what this post covers, 1-2 sentences',
//   concepts: ['bullet', 'bullet'],
//   project: {              // optional
//     name: 'BPE Tokenizer from scratch',
//     why: 'why you built it',
//     githubUrl: '',
//   },
//   takeaway: 'closing thought',
// }

export const posts = [
  // TODO: fill in with your real Season 1 episode titles and content.
  // Example starter entry — replace or delete:
  {
    slug: 'ep1-how-llms-work',
    title: 'Ep 1: How LLMs Actually Work',
    type: 'episode',
    season: 1,
    episode: 1,
    date: '2026-10-04',
    summary: 'Replace this with what episode 1 actually covered.',
    concepts: ['Next-token prediction', 'What "understanding" means for an LLM'],
    project: null,
    takeaway: '',
  },
]

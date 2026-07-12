# Managing Solutions Data

This guide explains how to easily add, edit, or remove the content for your Industries/Solutions pages on the live website.

## Where is the data?

All the data for the 14 Industries (which power the `/solutions` route) is securely stored in a single file:
**`apps/web/data/solutions.ts`**

## How to Edit an Industry

Open `apps/web/data/solutions.ts`. Inside this file, you will see a list of objects that look like this:

```typescript
{
  title: "Pharmaceutical",
  slug: "pharmaceutical", // Do NOT change the slug once it is live!
  description: "Short introductory description.",
  content: "Detailed overview paragraph...",
  image: "https://images.unsplash.com/...", // Premium 4K image link
  implementationStages: [
    {
      stage: "Granulation",
      machines: ["Roll Compactor", "Octagonal Machine", "Fluid bed Dryer Machine"]
    },
    {
      stage: "Compression",
      machines: ["Amplus Machine", "Giga Press Machine"]
    }
  ]
}
```

### 1. Changing Text & Images
You can freely change the text inside the `" "` quotes for `title`, `description`, `content`, and `image`. 

**Tip on Images:** We highly recommend using premium, high-resolution 4K images from Unsplash or a similar service. Ensure your image URLs end with `?q=80&w=3840&auto=format&fit=crop` to guarantee they stretch perfectly across large monitors without losing quality.

### 2. Editing the Staged Layout (implementationStages)
The website features a beautiful typography layout where machines/solutions are grouped into numbered stages (e.g., `01 Granulation`, `02 Compression`). 

To modify these:
- Simply add or remove machines inside the `machines: [...]` arrays. Be sure to wrap the machine names in quotes.
- To add a completely new stage, add a new block inside `implementationStages`:
  ```typescript
  {
    stage: "New Awesome Stage",
    machines: ["Machine A", "Machine B"]
  }
  ```

### What if I don't want stages?
If a certain industry doesn't make sense to divide into stages, you can simply use the `implementations` fallback array instead of `implementationStages`. 
```typescript
{
  title: "Simple Industry",
  // ...
  implementations: ["Machine 1", "Machine 2", "Machine 3"]
}
```
If you do this, the website will automatically fall back to rendering a neat grid of grey boxes with bullets instead of the staged layout.

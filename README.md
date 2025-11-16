# USGentics

A comprehensive Turborepo monorepo platform for exploring human genetic diversity, ancestry, and environmental factors affecting human evolution.

## Overview

USGentics is a non-biased, scientific platform dedicated to understanding:

- **Genetic Ancestry**: Haplogroups, mitochondrial DNA (mtDNA), and ancestral origins
- **Unique Adaptations**: Rare genetic phenomena like the Haenyo Korean diver women's spleen adaptations
- **Environmental Impact**: How diet, air quality, radiation, and materials influence genetic expression
- **Modern Evolution**: Understanding rapid changes from globalization and interbreeding
- **Healthcare Insights**: Navigating the healthcare space with genetic and phenotypic data

## Project Structure

This is a Turborepo monorepo containing:

### Apps

- **`apps/web`**: Next.js web application for users to upload genomes and explore results
- **`apps/api`**: Express API service for genetic data processing and analysis

### Packages

- **`packages/genetics-analysis`**: Core genetic analysis utilities
  - Haplogroup analysis (Y-DNA and mtDNA)
  - SNP analysis for traits and health markers
  - Ancestry composition
  - Unique genetic adaptation detection

- **`packages/environmental-tracking`**: Environmental factor monitoring
  - Diet and gut microbiome tracking
  - Air quality monitoring
  - Radiation exposure tracking
  - Material and chemical exposure assessment

- **`packages/data-models`**: Shared data types and models
- **`packages/ui-components`**: Shared React components
- **`packages/config`**: Shared TypeScript configurations

## Modern Genetic Phenomena

We focus on understanding contemporary genetic changes:

1. **Changing Gut Biomes**: As humanity becomes more globally connected, our gut microbiomes are adapting to diverse food sources from around the world

2. **Rapid Interbreeding**: Global migration and cultural exchange are leading to unprecedented genetic diversity in populations worldwide

3. **Unique Adaptations**: We study remarkable examples like:
   - Haenyo Korean diver women with unique spleen genetics enabling deeper diving
   - Tibetan high-altitude adaptations
   - Bajau sea nomad diving capabilities

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

```bash
# Install dependencies
pnpm install

# Run development servers
pnpm dev

# Build all packages and apps
pnpm build

# Run tests
pnpm test
```

### Development

```bash
# Run web app in development
cd apps/web
pnpm dev

# Run API server in development
cd apps/api
pnpm dev
```

## Ethical Commitment

We are committed to:

- **Scientific Integrity**: All analysis based on peer-reviewed research
- **Privacy Protection**: Highest standards of data security and encryption
- **Non-Bias**: Presenting genetic information responsibly without discrimination
- **User Ownership**: Users maintain full ownership and control of their genetic data
- **Transparency**: Clear communication about what data is collected and how it's used

See [ETHICS.md](./ETHICS.md) for our complete ethical guidelines.

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the MIT License.

## Support

For questions or issues, please open an issue in this repository.

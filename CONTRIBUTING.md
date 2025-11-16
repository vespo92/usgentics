# Contributing to USGentics

Thank you for your interest in contributing to USGentics! This document provides guidelines for contributing to the project.

## Code of Conduct

We are committed to providing a welcoming and inclusive environment. Please:

- Be respectful and considerate
- Welcome newcomers and help them get started
- Focus on what is best for the community
- Show empathy towards other community members
- Respect differing viewpoints and experiences

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/yourusername/usgentics.git`
3. Install dependencies: `pnpm install`
4. Create a branch: `git checkout -b feature/your-feature-name`

## Development Workflow

### Project Structure

```
usgentics/
├── apps/
│   ├── web/          # Next.js web application
│   └── api/          # Express API service
├── packages/
│   ├── genetics-analysis/      # Genetic analysis utilities
│   ├── environmental-tracking/ # Environmental monitoring
│   ├── data-models/           # Shared types and models
│   ├── ui-components/         # Shared React components
│   └── config/                # TypeScript configs
```

### Running the Development Environment

```bash
# Run all apps in development mode
pnpm dev

# Run specific app
pnpm --filter @usgentics/web dev
pnpm --filter @usgentics/api dev

# Build all packages
pnpm build

# Run tests
pnpm test

# Lint code
pnpm lint

# Type check
pnpm type-check
```

## Contribution Guidelines

### Types of Contributions

We welcome:

- **Bug fixes**: Fixing issues in existing code
- **Features**: Adding new functionality
- **Documentation**: Improving or adding documentation
- **Tests**: Adding or improving test coverage
- **Performance**: Optimizing existing code
- **Accessibility**: Improving accessibility
- **Refactoring**: Improving code quality

### Scientific Contributions

For genetic analysis contributions:

- **Cite Sources**: All genetic claims must be backed by peer-reviewed research
- **Include References**: Add references to scientific papers in comments
- **Explain Algorithms**: Document the scientific basis for analysis methods
- **Update Documentation**: Ensure scientific accuracy in user-facing docs

### Pull Request Process

1. **Create an Issue**: For significant changes, create an issue first to discuss
2. **Write Tests**: Add tests for new functionality
3. **Update Documentation**: Update relevant documentation
4. **Follow Code Style**: Use the project's coding conventions
5. **Commit Messages**: Write clear, descriptive commit messages
6. **Pull Request**: Submit a PR with a clear description of changes

### Commit Message Format

```
type(scope): subject

body

footer
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

Example:
```
feat(genetics): add high-altitude adaptation analysis

Implement analysis for EPAS1 and EGLN1 genes associated with
Tibetan high-altitude adaptation.

References:
- Yi et al. (2010) Science 329(5987): 75-78
- Beall et al. (2010) PNAS 107(25): 11459-11464
```

## Code Standards

### TypeScript

- Use TypeScript for all new code
- Enable strict mode
- Avoid `any` types when possible
- Document complex types and interfaces

### React

- Use functional components and hooks
- Follow React best practices
- Ensure accessibility (WCAG 2.1 AA)
- Write semantic HTML

### Testing

- Write unit tests for utilities and functions
- Write integration tests for API endpoints
- Test edge cases and error conditions
- Aim for >80% code coverage for new code

### Performance

- Optimize for performance where appropriate
- Avoid unnecessary re-renders in React
- Use appropriate data structures
- Profile before optimizing

## Ethical Considerations

When contributing, please:

- Review our [ETHICS.md](./ETHICS.md) guidelines
- Ensure contributions align with our ethical principles
- Avoid introducing bias in algorithms or presentation
- Respect user privacy and data security
- Question potentially harmful features or analyses

### Red Flags to Avoid

- Genetic determinism language
- Racial hierarchy implications
- Oversimplified ancestry claims
- Health predictions without scientific basis
- Privacy-violating features

## Areas Needing Contribution

High-priority areas:

### Genetic Analysis

- [ ] VCF file parser implementation
- [ ] 23andMe file format support
- [ ] AncestryDNA file format support
- [ ] Haplogroup determination algorithms
- [ ] SNP database integration
- [ ] Polygenic risk score calculations

### Environmental Tracking

- [ ] Air quality API integrations
- [ ] Dietary tracking interfaces
- [ ] Microbiome data correlation
- [ ] Location-based environmental data

### User Interface

- [ ] Data visualization components
- [ ] Interactive ancestry maps
- [ ] Haplogroup tree visualizations
- [ ] Mobile responsive design
- [ ] Accessibility improvements

### Documentation

- [ ] API documentation
- [ ] User guides
- [ ] Scientific methodology explanations
- [ ] FAQ section
- [ ] Video tutorials

### Testing

- [ ] Unit test coverage
- [ ] Integration tests
- [ ] End-to-end tests
- [ ] Performance benchmarks

## Getting Help

- Open an issue for questions
- Join discussions in pull requests
- Reach out to maintainers

## Recognition

Contributors will be:

- Listed in CONTRIBUTORS.md
- Acknowledged in release notes
- Credited in scientific publications (if applicable)

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

Thank you for helping make USGentics a valuable resource for understanding human genetic diversity!

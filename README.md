# ProjectHierarchySample

##Architecture
- **0 layer** - description of a directive with basic logic. The `src/core` directory. All classes are named with the `Core` prefix
- **1 layer** - projects. They contain components and modules that inherit from layer 0. Directory `src/projects`. Component selectors are named with a project prefix.
- **2 layer** - subprojects that inherit or override logic from 1 layer. Directory `src/projects/sub-projects`. The overridden selectors are named with the project prefix.

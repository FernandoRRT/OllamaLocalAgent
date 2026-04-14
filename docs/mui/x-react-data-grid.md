A fast and extensible React data table and React data grid, with filtering, sorting, aggregation, and more.

## Overview

The MUI X Data Grid is a TypeScript-based React component that presents information in a structured format of rows and columns. It provides developers with an intuitive API for implementing complex use cases; and end users with a smooth experience for manipulating an unlimited set of data.

The Grid's theming features are designed to be frictionless when integrating with Material UI and other MUI X components, but it can also stand on its own and be customized to meet the needs of any design system.

## Why choose the MUI X Data Grid?

There are numerous solutions available for building a data table, each with distinct trade-offs and design philosophies. The MUI X Data Grid is built specifically for React, offering a batteries-included solution with a fully styled, accessible user interface out of the box. Unlike headless table libraries, you can start building immediately without implementing UI components yourself, while still maintaining full customization capabilities through theming and component composition.

### Comparisons

#### AG Grid

AG Grid is a framework-agnostic solution that supports React, Vue, and Angular. Here's how the MUI X Data Grid differs:

* **React-first design**: Built exclusively for React with hooks, TypeScript, and React patterns at its core, providing a more idiomatic React experience
* **Material UI integration**: Seamless integration with Material UI's design system and theming, allowing you to maintain visual consistency across your application
* **Component composition**: Highly composable architecture that lets you customize individual parts while maintaining the full-featured grid experience

#### TanStack Table

TanStack Table (formerly React Table) is a headless table library that provides table logic without any UI. Here's how the MUI X Data Grid differs:

* **Complete UI included**: Fully styled, accessible components ready to use immediately—no need to build your own table UI, filters, or pagination controls
* **Built-in features**: Advanced features like editing, filtering, sorting, and virtualization come pre-implemented with polished user interfaces
* **Less boilerplate**: Get a production-ready data grid with minimal setup, rather than wiring together multiple libraries and building custom components

## Data Grid packages

The Data Grid is **open-core**: The Community version is MIT-licensed and free forever, while more advanced features require a Pro or Premium commercial license. See MUI X Licensing for complete details.

```
import { DataGrid } from '@mui/x-data-grid';
```

The MIT-licensed Community version of the Data Grid is a more sophisticated implementation of the Material UI Table.

It includes all of the main features listed in the navigation menu, such as editing, sorting, filtering, and pagination, as shown in the demo below:

### Pro version 

```
import { DataGridPro } from '@mui/x-data-grid-pro';
```

The Pro plan expands on the Community version with features like advanced filtering, column pinning, column and row reordering, support for tree data, and virtualization to handle larger datasets. Pro features are denoted by the blue cube icon () throughout the documentation.

The demo below displays 31 columns and 100,000 rows—over three million cells in total:

### Premium version 

```
import { DataGridPremium } from '@mui/x-data-grid-premium';
```

The Premium plan includes everything from the Pro plan as well as more advanced features for data analysis and large dataset management, such as row grouping with aggregation functions (like sum and average) and the ability to export to Excel files. Premium features are denoted by the golden cube icon () throughout the documentation.

The demo below groups rows by commodity name, and uses an aggregation function to calculate the sum of quantities for each group and in total (displayed in a summary row). You can experiment with grouping other columns in the column header menus. You can also try exporting to Excel, and copying and pasting data to and from Excel tables.
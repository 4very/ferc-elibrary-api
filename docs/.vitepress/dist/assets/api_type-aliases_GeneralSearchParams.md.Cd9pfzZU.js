import{_ as t,c as e,o as l,a1 as a}from"./chunks/framework.DTR-fORK.js";const h=JSON.parse('{"title":"Type alias: GeneralSearchParams","description":"","frontmatter":{},"headers":[],"relativePath":"api/type-aliases/GeneralSearchParams.md","filePath":"api/type-aliases/GeneralSearchParams.md"}'),d={name:"api/type-aliases/GeneralSearchParams.md"},r=a('<p><a href="./../globals.html">ferc-elibrary-api</a> / GeneralSearchParams</p><h1 id="type-alias-generalsearchparams" tabindex="-1">Type alias: GeneralSearchParams <a class="header-anchor" href="#type-alias-generalsearchparams" aria-label="Permalink to &quot;Type alias: GeneralSearchParams&quot;">​</a></h1><blockquote><p><strong>GeneralSearchParams</strong>: <code>object</code></p></blockquote><p>Search params for an eLibrary General Search <a href="https://elibrary.ferc.gov/eLibrary/search" target="_blank" rel="noreferrer">https://elibrary.ferc.gov/eLibrary/search</a></p><h2 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h2><table tabindex="0"><thead><tr><th style="text-align:left;">Member</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>accessionNumber</code></td><td style="text-align:left;"><code>string</code> | <code>null</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>affiliations</code></td><td style="text-align:left;"><a href="./../namespaces/Stubs/type-aliases/Affiliations.html"><code>Affiliations</code></a>[]</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>allDates</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>availability</code></td><td style="text-align:left;"><a href="./../namespaces/Stubs/type-aliases/SecurityLevel.html"><code>SecurityLevel</code></a>[] | <code>null</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>categories</code></td><td style="text-align:left;"><a href="./../namespaces/Stubs/type-aliases/Categories.html"><code>Categories</code></a>[]</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>classTypes</code></td><td style="text-align:left;"><a href="./../namespaces/Stubs/type-aliases/ClassType.html"><code>ClassType</code></a>[]</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>curPage</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>dateSearches</code></td><td style="text-align:left;"><code>DateSearch</code>[]</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>docketSearches</code></td><td style="text-align:left;"><code>DocketSearch</code>[]</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>eFiling</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>fedCourtCaseNumber</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>fedRegisterCite</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>fercCite</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>groupBy</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>idolResultID</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>libraries</code></td><td style="text-align:left;"><a href="./../namespaces/Stubs/type-aliases/Libraries.html"><code>Libraries</code></a>[]</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>opinion</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>orderNumber</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>parentAccessionNumber</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>resultsPerPage</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">Number of results to return per page.</td></tr><tr><td style="text-align:left;"><code>searchDescription</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>searchFullText</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>searchText</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>sortBy</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td></tr></tbody></table><h2 id="source" tabindex="-1">Source <a class="header-anchor" href="#source" aria-label="Permalink to &quot;Source&quot;">​</a></h2><p><a href="https://github.com/4very/ferc-elibrary-api/blob/5fca0cdab67bbed141a6d8d56056f02bebe7f172/src/types/GeneralSearch.ts#L27" target="_blank" rel="noreferrer">types/GeneralSearch.ts:27</a></p>',8),s=[r];function o(c,i,n,f,y,g){return l(),e("div",null,s)}const p=t(d,[["render",o]]);export{h as __pageData,p as default};
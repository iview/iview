# Component status and contribution queue

This page is the repository-level source of truth for the public component surface. Its inventory is derived from `src/index.js`; run `npm run verify:components` to catch missing component entry points and stale documentation.

## Available work

A proposed component is available to implement only when its GitHub issue:

1. uses the **Component proposal or claim** template;
2. has the `ready-to-implement` label;
3. does not have an `in-progress` label or an active linked pull request; and
4. has no current implementer recorded in the claim section.

The [available component queue](https://github.com/iview/iview/issues?q=is%3Aissue+is%3Aopen+label%3Aready-to-implement+label%3Acomponent-proposal+-label%3Ain-progress) applies those rules directly. This live queue is deliberately authoritative instead of a copied unchecked wishlist. It prevents two contributors from building the same component and keeps API approval attached to the implementation discussion.

To propose or claim work, follow [CONTRIBUTING.md](CONTRIBUTING.md). A component that has not passed proposal review is not available to claim.

## Shipped public components

<!-- component-inventory:start -->
- Affix (`affix`)
- Alert (`alert`)
- Anchor (`anchor`)
- AnchorLink (`anchor-link`)
- AutoComplete (`auto-complete`)
- Avatar (`avatar`)
- BackTop (`back-top`)
- Badge (`badge`)
- Breadcrumb (`breadcrumb`)
- Button (`button`)
- Calendar (`calendar`)
- Card (`card`)
- Carousel (`carousel`)
- Cascader (`cascader`)
- Cell (`cell`)
- Checkbox (`checkbox`)
- Circle (`circle`)
- Collapse (`collapse`)
- ColorPicker (`color-picker`)
- Content (`content`)
- DatePicker (`date-picker`)
- Divider (`divider`)
- Drawer (`drawer`)
- Dropdown (`dropdown`)
- Footer (`footer`)
- Form (`form`)
- Header (`header`)
- Icon (`icon`)
- Input (`input`)
- InputNumber (`input-number`)
- Layout (`layout`)
- List (`list`)
- LoadingBar (`loading-bar`)
- Menu (`menu`)
- Message (`message`)
- Modal (`modal`)
- Notice (`notice`)
- Page (`page`)
- Poptip (`poptip`)
- Progress (`progress`)
- Radio (`radio`)
- Rate (`rate`)
- Scroll (`scroll`)
- Sider (`sider`)
- Slider (`slider`)
- Spin (`spin`)
- Split (`split`)
- Steps (`steps`)
- Switch (`switch`)
- Table (`table`)
- Tabs (`tabs`)
- Tag (`tag`)
- Time (`time`)
- Timeline (`timeline`)
- TimePicker (`time-picker`)
- Tooltip (`tooltip`)
- Transfer (`transfer`)
- Tree (`tree`)
- Upload (`upload`)
<!-- component-inventory:end -->

Subcomponents such as `ButtonGroup`, `BreadcrumbItem`, and `TabPane` are exposed through their parent component and are reviewed as part of that parent's API.

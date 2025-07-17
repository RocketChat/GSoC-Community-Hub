```svelte
use Menubar from $lib/components/menubar/Menubar.svelte get brand get menutree

<main>
	<Menubar
		brand="MySite"
		menutree={[
			{
				top: 'Products',
				dropdown: [
					{ label: 'Pricing', href: '/pricing' },
					{ label: 'Features', href: '/features' },
					{ label: '---' },
					{ label: 'Documentation', href: '/docs' }
				]
			},
			{
				top: 'Company',
				dropdown: [
					{ label: 'About', href: '/about' },
					{ label: 'Careers', href: '/careers' }
				]
			}
		]}
	/>
</main>
```

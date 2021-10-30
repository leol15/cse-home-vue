



default:
	echo None

dev:
	npm run serve

deploy:
	npm run build
	rm -rf ~/public_html/x/home
	cp -r ./dist ~/public_html/x/home



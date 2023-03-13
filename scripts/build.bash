
# echo in white with Pink background
echo "\033[0;37;45m===== Build script started =====\033[0m\n"


echo "\033[0;37;42m - 📦 Building the library .... \033[0m\n"
npm run build:package
echo "\033[0;37;42m - 📦 Building the library finished\033[0m\n"


echo "\033[0;37;42m - 🏷️  Building the types .... \033[0m\n"
npm run build:types
echo "\033[0;37;42m - 🏷️  Building the types finished\033[0m\n"


echo "\033[0;37;42m- 🧹 Cleaning up ./dist folder\033[0m\n"
find ./dist -mindepth 1 -maxdepth 1 -type d -exec rm -rf {} \;


echo "\033[0;37;45m===== Build script finished =====\033[0m\n"

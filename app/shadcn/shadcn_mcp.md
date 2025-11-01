# connecting shadcn/ui with mcp server
1. run the mcp server for vscode(copilot) client using the command:
   ```bash
   npx shadcn@latest mcp init --client vscode
   ```
2. it will create a file named .vscode/mcp.json in your project directory, so open that file and click start on the json file.
3. now you can use shadcn/ui mcp server to browse the latest components in registry and use them in your project. or can use #shadcn_components_list like that to call tool directly from vscode copilot chat.
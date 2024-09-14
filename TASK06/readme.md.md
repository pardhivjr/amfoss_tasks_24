# OpenDocs
**MYSQL-WORKBENCH-PLUGIN-DOC-GENERATING**


**OVERVIEW**
Mysql-workbench-plugin-doc-generating is basically a  Python script to generate documentation from MySQL Workbench ERR diagram.


**USAGE**:
### Generate documentation from ERR digram
-   Open the ERR digram
-   Navigate to menu **Tools** > **Utilities** > **Generate Documentation (Markdown)**
-   When you see the status bar text changed to _Documentation generated into the clipboard. Paste it to your editor._, Paste (Ctrl + V in most Linux/Window applications) to your editor and save as a new file.

### Generate ERR digram from physical database
In case that you do not have the ERR diagram, you have to create a diagram from your physical database first. Don't worry, MySQL Workbench has a greate tool to do this for you called **Reverse Engineer**.

-   Open Workbench
-   Navigate to menu **Database** > **Reverse Engineer...**
-   Choose the connection, **Next**
-   Wait and **Next**
-   Select the datbase you want to create ERR diagram from, **Next**
-   Wait and **Next**
-   Select tables that you want to include in the ERR diagram, **Execute>**
-   Wait and **Next**
-   **Finish**

You have a new ERR diagram, you can generate the documentation from this diagram as the previous step.

After that, you can convert the output Markdown document into any format that you want.
### Setup Instructions
-   Download the latest release from [Github](https://github.com/letrunghieu/mysql-workbench-plugin-doc-generating/releases)
-   Extract the downloaded file and find a file named `mysql-workbench-plugin-doc-generating.py`
-   Open the MySQL Workbench
-   Navigate to menu **Scripting** > **Install Plugin/Module...**
-   Browse and select the extracted `.py` file
-   Restart the Workbench
 **Contribution Guidelines**

 **Reporting Issues:** Please report any issues or bugs using the GitHub Issues tab.
  **Submitting Pull Requests:** Fork the repository, make your changes, and submit a pull request with a description of your changes.

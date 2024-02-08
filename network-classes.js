class Canvas {
    constructor(divId) {
      this.divId = divId; // The ID of the DIV element where the diagram will be rendered
      this.initDiagram();
    }
  
    initDiagram() {
      const $ = go.GraphObject.make; // For conciseness in defining templates
  
      this.myDiagram = $(go.Diagram, this.divId, {
        // Set Diagram properties here
        "undoManager.isEnabled": true, // Enable undo & redo
        "clickCreatingTool.archetypeNodeData": { text: "Node", color: "white" }, // Default properties for a new node
        "commandHandler.archetypeGroupData": { text: "Group", isGroup: true, color: "blue" }, // Default properties for a new group
        // any other diagram properties or event handlers
      });
  
      // Define templates for nodes, links, groups, etc., here or in separate methods
      this.defineNodeTemplate();
      this.defineLinkTemplate();
      // More definitions can be added as needed
    }
  
    defineNodeTemplate() {
      const $ = go.GraphObject.make;
      // Example node template
      this.myDiagram.nodeTemplate =
        $(go.Node, "Auto", // The Shape will go around the TextBlock
          $(go.Shape, "RoundedRectangle", { strokeWidth: 0 },
            // Shape.fill is bound to Node.data.color
            new go.Binding("fill", "color")),
          $(go.TextBlock, { margin: 8 }, // Some room around the text
            // TextBlock.text is bound to Node.data.text
            new go.Binding("text", "text"))
        );
      // Add more properties and bindings as needed
    }
  
    defineLinkTemplate() {
      const $ = go.GraphObject.make;
      // Example link template
      this.myDiagram.linkTemplate =
        $(go.Link, // The default routing is go.Link.Normal
          $(go.Shape), // The link shape
          $(go.Shape, { toArrow: "Standard" }) // The arrowhead
        );
      // Add more properties and bindings as needed
    }
  
    // Additional methods to define group templates, context menus, etc., can be added here
  }
  
  
  
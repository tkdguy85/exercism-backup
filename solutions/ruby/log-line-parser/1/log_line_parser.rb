class LogLineParser
  def initialize(line)
    @line = line
  end

  def message
    # Keep only the message after the colon, remove whitespace or new lines
    @line.split(':', -1).last.strip
  end

  def log_level
    @line[/\[(.*?)\]/, 1].downcase
  end

  def reformat
    # automatically return this string
    "#{message} (#{log_level})"
  end
end
